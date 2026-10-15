"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band, so the leader cannot be
// recognised by colour alone. It is always shown; clicking it opens that country.
// Two lines: the country's name and "Most Bitcoin-friendly" in 14px under it, beside the award.
export default function FirstPlaceCard({
  name,
  onOpen,
}: {
  name: string;
  onOpen: () => void;
}) {
  return (
    // On phones it sits under the search bar and leaves room for the zoom buttons at the right edge
    <div className="flex max-w-[calc(100%-3.25rem)] sm:max-w-full">
      <button
        type="button"
        onClick={onOpen}
        className="ui-grain flex h-[58px] min-w-0 items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/95 px-3 text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`${name}, the most Bitcoin-friendly country. Open details`}
      >
        <Award className="h-[22px] w-[31px] shrink-0" />
        {/* As tall as the search bar (58px), with about 12px of space on every side of what is drawn
            (edge to award, award to text, text to edge, above the capitals and below the last
            baseline); the two lines are centred on the award. Measured for these sizes. */}
        <span className="min-w-0 translate-y-[0.9px]">
          <span className="block truncate font-chart-legend text-[1.0625rem] leading-[1.05] tracking-[0.02em] text-zinc-900 dark:text-white">
            {name}
          </span>
          <span className="mt-[3px] block whitespace-nowrap text-sm leading-[1.15] text-zinc-600 dark:text-zinc-300">
            Most Bitcoin-friendly
          </span>
        </span>
      </button>
    </div>
  );
}
