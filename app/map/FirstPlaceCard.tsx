"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band on its own merit, so the
// leader gets named: a card with the award and the country's name, 40px tall like the search bar
// and the zoom buttons
// (screen readers get "the most Bitcoin-friendly country" spelled out). Clicking it opens it.
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
        className="ui-grain flex h-10 min-w-0 items-center gap-2 rounded-lg border border-zinc-200/80 bg-white/95 px-3 text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`${name}, the most Bitcoin-friendly country. Open details`}
      >
        {/* The award is a little taller than the capitals of the name and shares their centre (the
            name is moved down 2.4px: Kepler sits its capitals above the middle of the line).
            About 14px of space at the left and right edges. Measured for these sizes. */}
        <Award className="h-4 w-[23px] shrink-0" />
        <span className="min-w-0 translate-y-[2.4px] truncate font-chart-title text-[1.125rem] leading-none tracking-[0.01em] text-zinc-900 dark:text-white">
          {name}
        </span>
      </button>
    </div>
  );
}
