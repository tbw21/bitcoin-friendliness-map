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

// The + and - glyphs sit below the middle of the line in Helvetica, so on the keys they are drawn
// as strokes, centred in the key
const PLUS_KEY = (
  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
    <path d="M6 1.5v9M1.5 6h9" />
  </svg>
);
const MINUS_KEY = (
  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
    <path d="M1.5 6h9" />
  </svg>
);

// A key cap. Keys drawn as strokes (with a label) find their baseline differently from keys with
// a letter, hence the two vertical-align values; both centre the key on the text like the buttons
function Key({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <kbd aria-label={label} className={`inline-flex h-6 min-w-6 items-center justify-center rounded border border-zinc-300 bg-zinc-50 px-1 ${label ? "align-[-1.08px]" : "align-[-0.08px]"} font-sans text-sm font-semibold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200`}>
      {children}
    </kbd>
  );
}

/* Small copies of the real buttons, for the tips. Each is centred on the text's letters (halfway
   between the cap height and the x-height, 4.9px above the baseline for 16px Helvetica Neue); the
   vertical-align values differ because each kind of box finds its baseline differently. */
/* Small copies of the real buttons, for the tips. The icons are the very same drawings (paths and
   stroke widths) as in WorldMap.tsx and Modal.tsx, in the same colours; only the size is smaller.
   Keep them in step when a button's icon changes. */

// A button from the column on the map (40px button, 24px icon -> 24px, 16px)
function MapButton({ label, children, strokeWidth }: { label: string; children: React.ReactNode; strokeWidth: number }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-white/90 align-[-3.08px] shadow-sm dark:border-zinc-700/55 dark:bg-zinc-900"
    >
      <svg className="h-4 w-4 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

// A button from the top of the details panel (36px button, 16px icon -> 24px, 12px)
function PanelButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200/80 bg-zinc-50 align-[-1.08px] text-zinc-900 dark:border-zinc-700/55 dark:bg-zinc-800 dark:text-white"
    >
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

const GLOBE = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
  </>
);
const BARS = (
  <>
    <rect x="4" y="10" width="4" height="10" rx="1" />
    <rect x="10" y="4" width="4" height="16" rx="1" />
    <rect x="16" y="13" width="4" height="7" rx="1" />
  </>
);
const SPEECH = (
  <>
    <path strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8a2.5 2.5 0 01-2.5 2.5H10l-4.5 3.5V17h0A1.5 1.5 0 014 15.5z" />
    {/* Exclamation mark, centred in the bubble: "tell us / report a problem" rather than "chat" */}
      <path strokeLinecap="round" d="M12 7v4" />
      <circle cx="12" cy="13.75" r="0.9" fill="currentColor" stroke="none" />
  </>
);
const PREVIOUS = <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />;
const NEXT = <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />;
const PIN = (
  <>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </>
);
const CLOSE = <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />;

// The feedback button (bottom right): icon and word
function FeedbackButton() {
  return (
    <span className="inline-flex h-6 items-center gap-1 rounded-md border border-zinc-200/80 bg-white/90 pl-1 pr-2 align-[-3.08px] text-sm text-zinc-900 shadow-sm dark:border-zinc-700/55 dark:bg-zinc-900 dark:text-white">
      <svg className="h-4 w-4 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        {SPEECH}
      </svg>
      Feedback
    </span>
  );
}

/** "How it works": how the countries were scored, and tips for using the map */
export const InfoPanel: React.FC<InfoPanelProps> = ({ onClose, closing }) => {
  const best = getCountriesByRank()[0];
  const tips: React.ReactNode[] = [
    <>Click a country to read its details. Click it again, or the sea, to close them.</>,
    <>Double-click a country to zoom in on it. Double-click it again, or the sea, to zoom back out.</>,
    <>
      Drag to move around, and scroll or pinch to zoom.{" "}
      <MapButton label="Show the whole world" strokeWidth={1.75}>{GLOBE}</MapButton> shows the whole world again.
    </>,
    <>
      In a country’s details, <PanelButton label="Previous country">{PREVIOUS}</PanelButton> and{" "}
      <PanelButton label="Next country">{NEXT}</PanelButton> step to the next country up or down the ranking,{" "}
      <PanelButton label="Show on map">{PIN}</PanelButton> zooms the map to it,{" "}
      <PanelButton label="Compare">{BARS}</PanelButton> puts it in a comparison and{" "}
      <PanelButton label="Close">{CLOSE}</PanelButton> closes the details. On a phone you can also pull them down.
    </>,
    <>Search for any country by name in the box at the top.</>,
    <>“Filter by Scores” shows only the countries in the bands you pick. “Clear” above it removes the filter.</>,
    <>“Top 5 Countries” lists the highest-scoring countries; click one to open it.</>,
    <>
      <MapButton label="Compare countries" strokeWidth={1.75}>{BARS}</MapButton> puts up to five countries side by side. Open a
      row to read what lies behind each score.
    </>,
    <>
      {/* On phones the feedback button is the speech bubble at the end of the button column */}
      <span className="sm:hidden">
        <MapButton label="Feedback" strokeWidth={1.75}>{SPEECH}</MapButton>
      </span>
      <span className="hidden sm:inline">
        <FeedbackButton />
      </span>{" "}
      sends us your feedback or a bug report by email.
    </>,
    <>
      On a keyboard, <Key label="+">{PLUS_KEY}</Key> and <Key label="−">{MINUS_KEY}</Key> zoom, <Key>0</Key> shows the whole world, the left and right arrow keys
      step between countries, and <Key>Esc</Key> closes what is open.
    </>,
    <>The page address includes the open country or comparison, so you can bookmark it or send it to someone.</>,
  ];

  return (
    <SidePanel label="How it works" title="How it works" onClose={onClose} closing={closing}>
      <section className="mb-6">
        <h3 className="mb-2 text-[1.125rem] font-semibold leading-6">How the countries were scored</h3>
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
        <h3 className="mb-2 text-[1.125rem] font-semibold leading-6">Tips for using the map</h3>
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
