"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band, so the leader cannot be
// recognised by colour alone. It is always shown; clicking it opens that country.
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
        className="ui-grain flex min-w-0 items-center rounded-lg border border-zinc-200/80 bg-white/95 py-[5px] pl-[7px] pr-[7px] text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`${name}, the most Bitcoin-friendly country. Open details`}
      >
        <Award className="h-[22px] w-[31px] shrink-0" />
        {/* Optical spacing: about 7px of space on all four sides of what is drawn — card edge to
            award, award to text, text to card edge, and above the capitals and below the last
            baseline — and the card as tall as the search bar (46px). The text block is centred on
            the award. Measured for these sizes. */}
        <span className="ml-[7px] min-w-0 translate-y-[0.9px]">
          <span className="block truncate font-chart-legend text-[1.0625rem] leading-[1.05] tracking-[0.02em] text-zinc-900 dark:text-white">
            {name}
          </span>
          <span className="block whitespace-nowrap text-sm leading-[1.15] text-zinc-600 dark:text-zinc-300">
            No.1 most Bitcoin-friendly
          </span>
        </span>
      </button>
    </div>
  );
}
