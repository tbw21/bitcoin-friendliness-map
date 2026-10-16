"use client";

import React from "react";
import { getCountriesByRank } from "@/data/countriesCsv";
import { legendEntries } from "@/data/legend";
import SidePanel from "./SidePanel";
import { scoreTint } from "./Modal";

export interface InfoPanelProps {
  onClose: () => void;
  closing?: boolean;
}

// The eight areas and their weight in the overall score. Keep in step with AREAS in
// scripts/import-living-index.py, which works the overall score out.
const WEIGHTS: Array<[string, number]> = [
  ["Tax on bitcoin", 20],
  ["Banking and buying bitcoin", 15],
  ["Legal freedom", 15],
  ["Moving here (residency)", 12],
  ["Spending bitcoin", 12],
  ["Privacy and tax reporting", 10],
  ["Bitcoin community", 8],
  ["Stability", 8],
];

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-zinc-300 bg-zinc-50 px-1 font-sans text-sm font-semibold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
      {children}
    </kbd>
  );
}

/** "How it works": how the countries were scored, and tips for using the map */
export const InfoPanel: React.FC<InfoPanelProps> = ({ onClose, closing }) => {
  const best = getCountriesByRank()[0];
  const tips: React.ReactNode[] = [
    <>Click a country to read its details. Click it again, or the sea, to close them.</>,
    <>Double-click a country to zoom in on it. Double-click it again, or the sea, to zoom back out.</>,
    <>
      Drag to move around, and scroll or pinch to zoom. On a keyboard, <Key>+</Key> and <Key>−</Key> zoom and <Key>0</Key> shows the whole world.
    </>,
    <>
      With a country open, <Key>←</Key> and <Key>→</Key> step to the next country up or down the ranking, and <Key>Esc</Key> closes it.
    </>,
    <>Search for any country by name in the box at the top.</>,
    <>“Filter by Scores” shows only the countries in the bands you pick. “Clear” above it removes the filter.</>,
    <>“Top 5 Countries” lists the highest-scoring countries; click one to open it.</>,
    <>Compare puts up to five countries side by side. Open a row to read what lies behind each score.</>,
    <>The pin in a country’s details zooms the map to that country.</>,
    <>The page address includes the open country, so you can bookmark it or send it to someone.</>,
  ];

  return (
    <SidePanel label="How it works" title="How it works" onClose={onClose} closing={closing}>
      <section className="mb-6">
        <h3 className="mb-2 font-chart-legend text-[1.125rem] leading-6 tracking-[0.02em]">How the countries were scored</h3>
        <p className="mb-3 text-zinc-700 dark:text-zinc-300">
          Every country is scored from 0 (worst) to 5 (best) in eight areas that matter when you live on bitcoin. The overall
          score is a weighted average of the eight:
        </p>
        <ul className="mb-3 divide-y divide-zinc-200/80 rounded-lg border border-zinc-200/80 dark:divide-zinc-700/55 dark:border-zinc-700/55">
          {WEIGHTS.map(([label, weight]) => (
            <li key={label} className="flex items-center justify-between gap-3 px-3 py-2">
              <span>{label}</span>
              <span className="shrink-0 tabular-nums text-zinc-600 dark:text-zinc-400">{weight}%</span>
            </li>
          ))}
        </ul>
        <p className="mb-3 text-zinc-700 dark:text-zinc-300">
          The averages are then scaled so that the best country{best ? ` (${best.name})` : ""} scores 5.0, and every other
          country is shown relative to it.
        </p>
        <p className="mb-2 text-zinc-700 dark:text-zinc-300">The colour on the map is the whole-number part of the overall score:</p>
        <ul className="mb-3 space-y-2">
          {legendEntries.map((entry) => (
            <li key={entry.score} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-sm font-semibold tabular-nums"
                style={scoreTint(entry.score)}
              >
                {entry.score}
              </span>
              <span>
                <span className="font-semibold">{entry.label}.</span>{" "}
                <span className="text-zinc-700 dark:text-zinc-300">{entry.description}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-zinc-700 dark:text-zinc-300">
          Each area text names its sources. The data was last reviewed in October 2026.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-chart-legend text-[1.125rem] leading-6 tracking-[0.02em]">Tips for using the map</h3>
        <ul className="space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" aria-hidden="true" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </SidePanel>
  );
};

export default InfoPanel;
