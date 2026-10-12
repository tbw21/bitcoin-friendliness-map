// Types
export type BitcoinScore = 1 | 2 | 3 | 4 | 5;
export type ConfidenceLevel = "High" | "Medium" | "Low";

export interface CountrySource {
  label: string;
  url: string;
}

export interface CountryData {
  code: string;
  name: string;
  score: BitcoinScore;
  /** Unrounded score from the CSV (e.g. 3.4); null when the CSV value is missing or not numeric */
  scoreExact: number | null;
  summary: string;
  details: string;
  legalClarity: string;
  taxTreatment: string;
  bankingFiatRails: string;
  selfCustodyRisk: string;
  residencyMobility: string;
  notes?: string;
  sources?: CountrySource[];
  lcScore: number | null;
  ttScore: number | null;
  bfcScore: number | null;
  rmScore: number | null;
  capital: string | null;
  population: string | null;
  confidence: ConfidenceLevel | null;
  rankGlobal: number | null;
}

/**
 * Normalize header name: trim whitespace and convert to lowercase with underscores
 */
function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/\s+/g, "_");
}

/**
 * Parse CSV line with semicolon delimiter, handling quoted fields
 */
function parseCsvLine(line: string, delimiter: string = ";"): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === "\"") {
        const next = line[i + 1];
        if (next === "\"") {
          cur += "\"";
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else {
      if (ch === "\"") inQuotes = true;
      else if (ch === delimiter) {
        out.push(cur);
        cur = "";
      } else cur += ch;
    }
  }
  out.push(cur);
  return out;
}

/**
 * Normalize population string for display.
 * Treats Population as pre-formatted display text - no parsing or formatting.
 * Returns null if empty or "—", otherwise returns trimmed string as-is.
 */
function normalizePopulation(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (trimmed === "" || trimmed === "—") {
    return null;
  }
  // Return as-is - already UX-formatted (e.g., "10,5M", "335M", "—")
  return trimmed;
}

function clampScore(n: number): BitcoinScore {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  if (n === 4) return 4;
  return 5;
}

/**
 * Parse a decimal that may use a comma as decimal separator (e.g. "3,4").
 * Returns null for empty or non-numeric values.
 */
function parseDecimal(value: string | null | undefined): number | null {
  if (!value) return null;
  const trimmed = value.trim().replace(",", ".");
  if (!/^\d+(\.\d+)?$/.test(trimmed)) return null;
  const num = Number.parseFloat(trimmed);
  return Number.isFinite(num) ? num : null;
}

/**
 * Drop redundant or stray parentheticals from the capital field,
 * e.g. "Abu Dhabi (capital)" or "Vatican City (user.iiasa.ac.at)".
 * Meaningful qualifiers such as "(de facto)" are kept.
 */
function normalizeCapital(raw: string): string {
  return raw.replace(/\s*\((capital|capital city|[a-z0-9-]+(\.[a-z0-9-]+)+)\)\s*$/i, "").trim();
}

/** Format a score for display: one decimal when the exact value is known and not whole. */
export function formatScore(country: Pick<CountryData, "score" | "scoreExact">): string {
  const exact = country.scoreExact;
  if (exact === null || Number.isInteger(exact)) return String(exact ?? country.score);
  return exact.toFixed(1);
}

function parseNumericScore(value: string | null | undefined): number | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "—") return null;
  const num = Number.parseInt(trimmed, 10);
  return Number.isFinite(num) ? num : null;
}

// The CSV mixes labels ("High") with numeric confidence ("0,65"); map both to one scale.
function parseConfidence(value: string | null | undefined): ConfidenceLevel | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed === "High" || trimmed === "Medium" || trimmed === "Low") {
    return trimmed as ConfidenceLevel;
  }
  const num = parseDecimal(trimmed);
  if (num === null) return null;
  if (num >= 0.75) return "High";
  if (num >= 0.55) return "Medium";
  return "Low";
}

let cachedCountries: Record<string, CountryData> | null = null;
let initPromise: Promise<void> | null = null;

async function initializeCountries(): Promise<void> {
  // If already loaded, return immediately
  if (cachedCountries) return;
  // If already loading, wait for it
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      // Fetch CSV from public directory
      // Use no-cache to ensure we always get the latest version
      const response = await fetch("/research-bitcoin-friendliness.csv", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load CSV: ${response.statusText}`);
      }
      const csvContent = await response.text();
      
      // Parse CSV
      const lines = csvContent.split(/\r?\n/).filter(Boolean);
      if (lines.length === 0) {
        throw new Error("CSV file is empty");
      }

      // Parse header and normalize column names
      const rawHeader = parseCsvLine(lines[0], ";");
      const normalizedHeaders = rawHeader.map(normalizeHeader);
      
      // Create index map for normalized headers
      const getIndex = (col: string): number => {
        const normalized = normalizeHeader(col);
        return normalizedHeaders.indexOf(normalized);
      };

      const iName = getIndex("name");
      const iCode = getIndex("alpha_2");
      const iLegal = getIndex("legal_clarity");
      const iTax = getIndex("tax_treatment");
      const iBank = getIndex("banking_fiat_rails");
      const iMobility = getIndex("residency_mobility");
      const iScore = getIndex("score_1_5");
      const iNotes = getIndex("notes");
      const iLcScore = getIndex("lc_score");
      const iTtScore = getIndex("tt_score");
      const iBfcScore = getIndex("bfc_score");
      const iRmScore = getIndex("rm_score");
      // Note: CSV has "Capital " (with trailing space) and "Population" (no space)
      // normalizeHeader trims whitespace, so we can search for "capital" and "population"
      const iCapital = getIndex("capital");
      const iPopulation = getIndex("population");
      const iConfidence = getIndex("confidence");

      const out: Record<string, CountryData> = {};

      // Parse all rows
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i], ";");
        const code = (cols[iCode] || "").trim().toUpperCase();
        if (!code) continue;

        const name = (cols[iName] || code).trim();
        const legalClarity = (cols[iLegal] || "").trim();
        const taxTreatment = (cols[iTax] || "").trim();
        const bankingFiatRails = (cols[iBank] || "").trim();
        const residencyMobility = (cols[iMobility] || "").trim();
        const notes = (cols[iNotes] || "").trim() || undefined;
        // Capital: treat as pre-formatted text, no parsing needed
        let capital = (cols[iCapital] || "").trim() || null;
        if (capital === "" || capital === "—") {
          capital = null;
        }
        if (capital) {
          capital = normalizeCapital(capital) || null;
        }

        const scoreExact = parseDecimal(cols[iScore]);
        // Colour band is the whole-number part of the score: 1,8 is band 1, and only a clean 5 is band 5
        const score = clampScore(scoreExact !== null ? Math.floor(scoreExact) : 3);

        const lcScore = parseNumericScore(cols[iLcScore]);
        const ttScore = parseNumericScore(cols[iTtScore]);
        const bfcScore = parseNumericScore(cols[iBfcScore]);
        const rmScore = parseNumericScore(cols[iRmScore]);
        const confidence = parseConfidence(cols[iConfidence]);

        const population = normalizePopulation(cols[iPopulation]);

        const summary = [
          legalClarity ? `Legal: ${legalClarity}` : null,
          taxTreatment ? `Tax: ${taxTreatment}` : null,
          bankingFiatRails ? `Banking: ${bankingFiatRails}` : null,
        ]
          .filter(Boolean)
          .join(" • ");

        const details = [
          legalClarity ? `Legal clarity: ${legalClarity}` : null,
          taxTreatment ? `Tax treatment: ${taxTreatment}` : null,
          bankingFiatRails ? `Banking / fiat rails: ${bankingFiatRails}` : null,
          residencyMobility ? `Residency / mobility: ${residencyMobility}` : null,
          notes ? `Notes: ${notes}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        out[code] = {
          code,
          name,
          score,
          scoreExact,
          summary: summary || "Bitcoin friendliness profile (from CSV).",
          details,
          legalClarity,
          taxTreatment,
          bankingFiatRails,
          selfCustodyRisk: "", // Not in new CSV, keep for compatibility
          residencyMobility,
          notes,
          lcScore,
          ttScore,
          bfcScore,
          rmScore,
          capital,
          population,
          confidence,
          rankGlobal: null, // Will be computed after all countries are loaded
        };
      }

      // Compute rank_global: sort by score_1_5 desc, then avg of sub-scores desc, then name asc
      const countriesArray = Object.values(out);
      
      countriesArray.sort((a, b) => {
        // Primary: score_1_5 descending (unrounded where available)
        const exactA = a.scoreExact ?? a.score;
        const exactB = b.scoreExact ?? b.score;
        if (Math.abs(exactA - exactB) > 0.001) {
          return exactB - exactA;
        }
        
        // Secondary: average of sub-scores descending
        const avgA = [
          a.lcScore ?? 0,
          a.ttScore ?? 0,
          a.bfcScore ?? 0,
          a.rmScore ?? 0,
        ].reduce((sum, s) => sum + s, 0) / 4;
        
        const avgB = [
          b.lcScore ?? 0,
          b.ttScore ?? 0,
          b.bfcScore ?? 0,
          b.rmScore ?? 0,
        ].reduce((sum, s) => sum + s, 0) / 4;
        
        if (Math.abs(avgA - avgB) > 0.001) {
          return avgB - avgA;
        }
        
        // Tertiary: name ascending
        return a.name.localeCompare(b.name);
      });
      
      // Assign ranks (1-based)
      countriesArray.forEach((country, index) => {
        country.rankGlobal = index + 1;
      });

      // Convert back to record
      const result: Record<string, CountryData> = {};
      countriesArray.forEach((country) => {
        result[country.code] = country;
      });

      cachedCountries = result;

      // Dev-only sanity check
      if (process.env.NODE_ENV === "development") {
        const au = result["AU"];
        const se = result["SE"];
        const us = result["US"];
        console.log("Population display check (pre-formatted from CSV):");
        console.log(`Australia (AU): population="${au?.population ?? "null"}"`);
        console.log(`Sweden (SE): population="${se?.population ?? "null"}"`);
        console.log(`United States (US): population="${us?.population ?? "null"}"`);
      }
    } catch (error) {
      console.error("Error loading countries:", error);
      cachedCountries = {}; // Fallback to empty
    }
  })();

  return initPromise;
}

// Initialize on module load (client-side)
if (typeof window !== "undefined") {
  initializeCountries();
}

export function getCountry(code: string): CountryData {
  if (!cachedCountries) {
    console.warn("Countries data not loaded yet, returning default");
    return getDefaultCountry(code);
  }
  
  const upper = code.toUpperCase();
  const fromCsv = cachedCountries[upper];
  if (fromCsv) return fromCsv;
  
  return getDefaultCountry(code);
}

function getDefaultCountry(code: string): CountryData {
  const upper = code.toUpperCase();
  return {
    code: upper,
    name: upper,
    score: 3,
    scoreExact: null,
    summary: "Default Bitcoin friendliness profile (not found in CSV).",
    details: "This country was not found in the CSV dataset.",
    legalClarity: "Unknown",
    taxTreatment: "Unknown",
    bankingFiatRails: "Unknown",
    selfCustodyRisk: "Unknown",
    residencyMobility: "Unknown",
    lcScore: null,
    ttScore: null,
    bfcScore: null,
    rmScore: null,
    capital: null,
    population: null,
    confidence: null,
    rankGlobal: null,
  };
}

// Export countries object for backward compatibility
export const countries: Record<string, CountryData> = new Proxy({} as Record<string, CountryData>, {
  get(target, prop) {
    if (cachedCountries) {
      return cachedCountries[prop as string];
    }
    return undefined;
  },
});

// Export initialization function for components that need to ensure data is loaded
export { initializeCountries };

// Get all countries (returns empty object if not loaded yet)
export function getAllCountries(): Record<string, CountryData> {
  return cachedCountries || {};
}

// Get all countries as array
export function getAllCountriesArray(): CountryData[] {
  if (!cachedCountries) return [];
  return Object.values(cachedCountries);
}

// Get all countries sorted by global rank (rank 1 first)
export function getCountriesByRank(): CountryData[] {
  return getAllCountriesArray()
    .filter((c) => c.rankGlobal != null)
    .sort((a, b) => (a.rankGlobal ?? Infinity) - (b.rankGlobal ?? Infinity));
}
