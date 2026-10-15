"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band on its own merit, so the
// leader gets named. A heading on the map, "No.1 most Bitcoin-friendly:", and under it a card
// as tall as the search bar with the award and the country's name. Clicking it opens the country.
export default function FirstPlaceCard({
  name,
  onOpen,
}: {
  name: string;
  onOpen: () => void;
}) {
  return (
    // On phones it sits under the search bar and leaves room for the zoom buttons at the right edge
    <div className="flex max-w-[calc(100%-3.25rem)] flex-col items-start sm:max-w-full">
      <span className="mb-1.5 text-sm font-semibold leading-[18px] text-white [text-shadow:0_1px_3px_rgba(0,8,20,0.9)]">
        No.1 most Bitcoin-friendly:
      </span>
      <button
        type="button"
        onClick={onOpen}
        className="ui-grain flex h-[46px] min-w-0 items-center gap-[10px] rounded-lg border border-zinc-200/80 bg-white/95 pl-[14px] pr-[13px] text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`${name}, the most Bitcoin-friendly country. Open details`}
      >
        {/* The award is a little taller than the capitals of the name and shares their centre (the
            name is moved down 2.5px: Kepler sits its capitals above the middle of the line).
            About 14px of space at the left and right edges. Measured for these sizes. */}
        <Award className="h-[19px] w-[27px] shrink-0" />
        <span className="min-w-0 translate-y-[2.55px] truncate font-chart-title text-[1.25rem] leading-none tracking-[0.01em] text-zinc-900 dark:text-white">
          {name}
        </span>
      </button>
    </div>
  );
}
