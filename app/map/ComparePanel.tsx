"use client";

import React, { useMemo, useRef, useState } from "react";
import { AREAS, formatScore, getAllCountriesArray, getCountriesByRank, getCountry } from "@/data/countriesCsv";
import { legendEntries } from "@/data/legend";
import { getFlagUrl } from "@/lib/flags";
import SidePanel from "./SidePanel";
import { scoreTint } from "./Modal";

export const MAX_COMPARE = 5;

export interface ComparePanelProps {
  codes: string[];
  onAdd: (code: string) => void;
  onRemove: (code: string) => void;
  onSetCodes: (codes: string[]) => void;
  onClose: () => void;
  closing?: boolean;
}

// Short row names for the table (the full area name heads the opened row)
const SHORT_LABELS: Record<string, string> = {
  tax: "Tax",
  banking: "Banking",
  legal: "Legal",
  residency: "Residency",
  spending: "Spending",
  community: "Community",
  privacy: "Privacy",
  stability: "Stability",
};

// "Iran, Islamic Republic of" -> "Islamic Republic of Iran"
function displayName(name: string): string {
  const match = name.match(/^(.+),\s*(.+)$/);
  return match ? `${match[2]} ${match[1]}` : name;
}

// Area scores run 0 to 5; the tints only exist for bands 1 to 5, so 0 uses the lowest
const band = (score: number) => Math.min(5, Math.max(1, Math.round(score)));

function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={getFlagUrl(code, "w40")}
      alt=""
      className={`shrink-0 rounded-[2px] object-cover ring-1 ring-zinc-200/80 dark:ring-zinc-700/55 ${className}`}
    />
  );
}

/**
 * Compare up to five countries. The scores sit side by side in a compact table (one narrow column
 * per country, so five fit on a phone); the texts behind a score are one tap away: opening a row
 * lists each country's text for that area underneath, one after the other, so they never have
 * to share the width.
 */
export const ComparePanel: React.FC<ComparePanelProps> = ({ codes, onAdd, onRemove, onSetCodes, onClose, closing }) => {
  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const full = codes.length >= MAX_COMPARE;
  const countries = codes.map((code) => getCountry(code));

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return getAllCountriesArray()
      .filter((c) => !codes.includes(c.code))
      .map((c) => ({ c, name: displayName(c.name), at: displayName(c.name).toLowerCase().indexOf(q) }))
      .filter((r) => r.at >= 0 || r.c.code.toLowerCase() === q)
      .sort((a, b) => (a.at === 0 ? 0 : 1) - (b.at === 0 ? 0 : 1) || a.name.localeCompare(b.name))
      .slice(0, 6);
  }, [query, codes]);

  const add = (code: string) => {
    onAdd(code);
    setQuery("");
    inputRef.current?.focus();
  };

  // Best value in a row: outlined, but only when there is something to tell apart
  const bestOf = (values: (number | null)[]) => {
    const known = values.filter((v): v is number => v !== null);
    if (known.length < 2 || known.every((v) => v === known[0])) return null;
    return Math.max(...known);
  };

  const columns = `minmax(6.5rem, 1fr) repeat(${countries.length}, minmax(2.5rem, 3.5rem))`;
  const bestRing = "ring-2 ring-inset ring-zinc-900/60 dark:ring-white/80";

  const overallValues = countries.map((c) => (c.hasData ? c.scoreExact ?? c.score : null));
  const overallBest = bestOf(overallValues);

  return (
    <SidePanel label="Compare countries" title="Compare" onClose={onClose} closing={closing}>
      <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">
        Pick up to {MAX_COMPARE} countries to see their scores side by side.
        <span className="hidden md:inline"> You can also click countries on the map.</span>
      </p>

      {/* Chosen countries, in column order, each with a remove button. On phones they stay on one
          line that scrolls sideways, so the table starts high up; from sm up they wrap. */}
      {countries.length > 0 && (
        <ul className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {countries.map((c) => (
            <li
              key={c.code}
              className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50 pl-3 pr-1 dark:border-zinc-700/55 dark:bg-zinc-800"
            >
              <Flag code={c.code} className="h-3 w-4" />
              <span className="max-w-[12rem] truncate text-base">{displayName(c.name)}</span>
              <button
                type="button"
                onClick={() => onRemove(c.code)}
                className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white cursor-pointer"
                aria-label={`Remove ${displayName(c.name)}`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Add a country */}
      <div className="relative mb-4">
        <input
          ref={inputRef}
          type="text"
          value={query}
          disabled={full}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) {
              e.preventDefault();
              add(results[0].c.code);
            }
          }}
          placeholder={full ? `That's ${MAX_COMPARE}, remove one to add another` : "Add a country…"}
          aria-label="Add a country to compare"
          className="h-10 w-full rounded-lg border border-zinc-200/80 bg-white px-4 text-base text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:opacity-60 dark:border-zinc-700/55 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-zinc-600"
        />
        {results.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-lg dark:border-zinc-700/55 dark:bg-zinc-800">
            {results.map(({ c, name }) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => add(c.code)}
                  className="flex h-10 w-full items-center gap-2 px-4 text-left text-base hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer"
                >
                  <Flag code={c.code} className="h-3 w-4" />
                  <span className="truncate">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {countries.length === 0 ? (
        <button
          type="button"
          onClick={() => onSetCodes(getCountriesByRank().slice(0, MAX_COMPARE).map((c) => c.code))}
          className="flex h-10 items-center rounded-lg border border-zinc-200/80 bg-zinc-50 px-4 text-base font-semibold hover:bg-zinc-100 dark:border-zinc-700/55 dark:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer"
        >
          Start with the top {MAX_COMPARE}
        </button>
      ) : (
        <>
          <div role="table" aria-label="Scores side by side" className="grid gap-1" style={{ gridTemplateColumns: columns }}>
            {/* Column heads: flag and country code (the full names are in the list above) */}
            <div role="row" className="contents">
              <div role="columnheader" />
              {countries.map((c) => (
                <div
                  key={c.code}
                  role="columnheader"
                  title={displayName(c.name)}
                  aria-label={displayName(c.name)}
                  className="flex flex-col items-center gap-1 pb-1"
                >
                  <Flag code={c.code} className="h-4 w-6" />
                  <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{c.code}</span>
                </div>
              ))}
            </div>

            {/* Overall score, in the band colour */}
            <div role="row" className="contents">
              <div role="rowheader" className="flex min-h-10 items-center text-base font-semibold">
                Overall
              </div>
              {countries.map((c, i) => (
                <div
                  key={c.code}
                  role="cell"
                  title={c.hasData ? legendEntries.find((e) => e.score === c.score)?.label : "No data"}
                  className={`flex min-h-10 items-center justify-center rounded-md border text-base font-semibold tabular-nums ${
                    overallValues[i] !== null && overallValues[i] === overallBest ? bestRing : ""
                  }`}
                  style={c.hasData ? scoreTint(c.score) : undefined}
                >
                  {c.hasData ? formatScore(c) : "—"}
                </div>
              ))}
            </div>

            {/* Rank */}
            <div role="row" className="contents">
              <div role="rowheader" className="flex min-h-10 items-center text-base">
                Rank
              </div>
              {countries.map((c) => (
                <div key={c.code} role="cell" className="flex min-h-10 items-center justify-center text-base tabular-nums text-zinc-600 dark:text-zinc-400">
                  {c.rankGlobal ? `#${c.rankGlobal}` : "—"}
                </div>
              ))}
            </div>

            {/* The eight areas; a row opens to show what lies behind the scores */}
            {AREAS.map((area) => {
              const scores = countries.map((c) => (c.hasData ? c.areas.find((a) => a.key === area.key)?.score ?? null : null));
              const best = bestOf(scores);
              const isOpen = openRow === area.key;
              return (
                <React.Fragment key={area.key}>
                  <div role="row" className="contents">
                    <div role="rowheader" className="flex min-h-10">
                      <button
                        type="button"
                        onClick={() => setOpenRow(isOpen ? null : area.key)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-1 text-left text-base hover:underline underline-offset-4 cursor-pointer"
                      >
                        <svg
                          className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform dark:text-zinc-400 ${isOpen ? "rotate-90" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                        </svg>
                        {SHORT_LABELS[area.key] ?? area.label}
                      </button>
                    </div>
                    {scores.map((score, i) => (
                      <button
                        key={countries[i].code}
                        type="button"
                        role="cell"
                        onClick={() => setOpenRow(isOpen ? null : area.key)}
                        aria-label={`${displayName(countries[i].name)}: ${score === null ? "no data" : `${score} out of 5`}`}
                        className={`flex min-h-10 items-center justify-center rounded-md border text-base tabular-nums cursor-pointer ${
                          score !== null && score === best ? `${bestRing} font-bold` : ""
                        }`}
                        style={score !== null ? scoreTint(band(score)) : undefined}
                      >
                        {score ?? "—"}
                      </button>
                    ))}
                  </div>
                  {isOpen && (
                    <div className="space-y-2 pt-1 pb-3" style={{ gridColumn: "1 / -1" }}>
                      <h3 className="text-base font-semibold">{area.label}</h3>
                      {countries.map((c, i) => {
                        const text = c.areas.find((a) => a.key === area.key)?.text;
                        const score = scores[i];
                        return (
                          <div
                            key={c.code}
                            className="rounded-lg border p-3"
                            style={score !== null ? scoreTint(band(score)) : undefined}
                          >
                            <div className="mb-1 flex items-center gap-2">
                              <Flag code={c.code} className="h-3 w-4" />
                              <span className="min-w-0 flex-1 truncate font-semibold">{displayName(c.name)}</span>
                              <span className="shrink-0 font-bold tabular-nums">
                                {score ?? "—"} <span className="font-medium opacity-70">/ 5</span>
                              </span>
                            </div>
                            <p>{c.hasData ? text || "—" : "This country has not been scored yet."}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            {countries.length === 1
              ? "Add another country to compare."
              : "The best score in each row is outlined. Open a row to read what lies behind the scores."}
          </p>
        </>
      )}
    </SidePanel>
  );
};

export default ComparePanel;
