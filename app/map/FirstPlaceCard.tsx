"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band, so the leader cannot be
// recognised by colour alone. It is always shown; clicking it opens that country.
// One line: the award, "No.1" in gold and the country's name.
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
        className="ui-grain flex h-[52px] min-w-0 items-center gap-3 rounded-lg border border-zinc-200/80 bg-white/95 pl-3.5 pr-4 text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`Number 1: ${name}, the most Bitcoin-friendly country. Open details`}
      >
        <Award className="h-[22px] w-[31px] shrink-0" />
        {/* As tall as the search bar (52px); the line is centred on the award */}
        <span className="min-w-0 truncate font-chart-legend text-[1.0625rem] leading-none tracking-[0.02em]">
          <span className="text-[#9a6b12] dark:text-[#e8b84a]">No.1</span>{" "}
          <span className="text-zinc-900 dark:text-white">{name}</span>
        </span>
      </button>
    </div>
  );
}
