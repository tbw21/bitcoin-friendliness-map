// Country data: the Bitcoin Living Index, loaded from /public/bitcoin-living-index.csv
// (made from the spreadsheet by scripts/import-living-index.py).

export type BitcoinScore = 1 | 2 | 3 | 4 | 5;

/** One of the eight scored areas of a country */
export interface CountryArea {
  key: string;
  label: string;
  /** The assessment text */
  text: string;
  /** 0 (worst) to 5 (best); null when missing */
  score: number | null;
}

// The eight areas, in the order they are shown. `key` is the CSV column with the text;
// the score is in the column `${key}_score`.
export const AREAS: Array<{ key: string; label: string }> = [
  { key: "tax", label: "Tax on bitcoin" },
  { key: "banking", label: "Banking and buying bitcoin" },
  { key: "legal", label: "Legal freedom" },
  { key: "residency", label: "Moving here" },
  { key: "spending", label: "Spending bitcoin" },
  { key: "community", label: "Bitcoin community" },
  { key: "privacy", label: "Privacy and tax reporting" },
  { key: "stability", label: "Stability" },
];

export interface CountryData {
  code: string;
  name: string;
  /** Colour band: the whole-number part of the overall score (below 1 counts as band 1) */
  score: BitcoinScore;
  /** Overall score from the CSV (e.g. 3.42); null when the CSV value is missing or not numeric */
  scoreExact: number | null;
  /** False when there is no usable score for this country: it is shown as "No data", not as a band */
  hasData: boolean;
  areas: CountryArea[];
  summary: string;
  capital: string | null;
  population: string | null;
  /** How much research is behind the row ("Detailed", "Standard", "Limited"); loaded, not shown */
  detail: string | null;
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

/** Text field that may be empty or a dash: null when there is nothing to show */
function optionalText(raw: string | null | undefined): string | null {
  const trimmed = (raw ?? "").trim();
  return trimmed === "" || trimmed === "—" ? null : trimmed;
}

function clampBand(n: number): BitcoinScore {
  if (n <= 1) return 1;
  if (n >= 5) return 5;
  return n as BitcoinScore;
}

/**
 * Parse a decimal with either a point or a comma as decimal sign (e.g. "3.42" or "3,4").
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
      const response = await fetch("/bitcoin-living-index.csv", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load CSV: ${response.statusText}`);
      }
      const csvContent = await response.text();

      const lines = csvContent.split(/\r?\n/).filter(Boolean);
      if (lines.length === 0) {
        throw new Error("CSV file is empty");
      }

      const headers = parseCsvLine(lines[0], ";").map(normalizeHeader);
      const getIndex = (col: string): number => headers.indexOf(normalizeHeader(col));

      const iName = getIndex("name");
      const iCode = getIndex("alpha_2");
      const iCapital = getIndex("capital");
      const iPopulation = getIndex("population");
      const iScore = getIndex("overall_score");
      const iSummary = getIndex("summary");
      const iDetail = getIndex("detail");
      const areaColumns = AREAS.map((area) => ({
        ...area,
        iText: getIndex(area.key),
        iScore: getIndex(`${area.key}_score`),
      }));

      const out: Record<string, CountryData> = {};

      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i], ";");
        const code = (cols[iCode] || "").trim().toUpperCase();
        if (!code) continue;

        const scoreExact = parseDecimal(cols[iScore]);
        const capital = optionalText(cols[iCapital]);

        out[code] = {
          code,
          name: (cols[iName] || code).trim(),
          // Colour band is the whole-number part of the score: 1.8 is band 1, and only a clean 5 is band 5
          score: clampBand(scoreExact !== null ? Math.floor(scoreExact) : 3),
          scoreExact,
          hasData: scoreExact !== null,
          areas: areaColumns.map((area) => ({
            key: area.key,
            label: area.label,
            text: (cols[area.iText] || "").trim(),
            score: parseDecimal(cols[area.iScore]),
          })),
          summary: (cols[iSummary] || "").trim(),
          capital: capital ? normalizeCapital(capital) || null : null,
          population: optionalText(cols[iPopulation]),
          detail: optionalText(cols[iDetail]),
          rankGlobal: null, // Will be computed after all countries are loaded
        };
      }

      // Rank: overall score descending, then name ascending. This is the order the summaries in
      // the data use ("Ranked 4th out of 249 countries"), so the two always agree.
      // Countries without data are not ranked.
      const countriesArray = Object.values(out).filter((country) => country.hasData);
      countriesArray.sort((a, b) => {
        const diff = (b.scoreExact ?? 0) - (a.scoreExact ?? 0);
        if (Math.abs(diff) > 0.001) return diff;
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
      countriesArray.forEach((country, index) => {
        country.rankGlobal = index + 1;
      });

      // Convert back to record (ranked countries first, then the ones without data)
      const result: Record<string, CountryData> = {};
      countriesArray.forEach((country) => {
        result[country.code] = country;
      });
      Object.values(out).forEach((country) => {
        if (!country.hasData) result[country.code] = country;
      });

      cachedCountries = result;
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

// Shapes on the map that have no row in the CSV (shown as "No data")
const NAMES_WITHOUT_ROW: Record<string, string> = {
  GO: "Glorioso Islands",
  JU: "Juan de Nova Island",
  "UM-DQ": "Jarvis Island",
  "UM-FQ": "Baker Island",
  "UM-HQ": "Howland Island",
  "UM-JQ": "Johnston Atoll",
  "UM-MQ": "Midway Islands",
  "UM-WQ": "Wake Island",
};

function getDefaultCountry(code: string): CountryData {
  const upper = code.toUpperCase();
  return {
    code: upper,
    name: NAMES_WITHOUT_ROW[upper] ?? upper,
    score: 3,
    scoreExact: null,
    hasData: false,
    areas: AREAS.map((area) => ({ ...area, text: "", score: null })),
    summary: "",
    capital: null,
    population: null,
    detail: null,
    rankGlobal: null,
  };
}

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
