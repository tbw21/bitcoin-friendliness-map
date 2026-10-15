"use client";

import React from "react";
import Award from "./Award";

// First place gets its own card next to the search bar (WorldMap.tsx passes whichever country
// ranks first in the data): no country reaches the top colour band, so the leader cannot be
// recognised by colour alone. It is always shown; clicking it opens that country.
// Two lines beside the award: the country's name, and "No.1 most Bitcoin-friendly" under it.
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
        className="ui-grain flex h-[58px] min-w-0 items-center gap-[13px] rounded-lg border border-zinc-200/80 bg-white/95 pl-[18px] pr-[18px] text-left shadow-lg backdrop-blur transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900/95 dark:hover:bg-zinc-900 cursor-pointer"
        aria-label={`${name}, the most Bitcoin-friendly country. Open details`}
      >
        <Award className="h-[26px] w-[37px] shrink-0" />
        {/* As tall as the search bar (58px); the two lines (top of the capitals to the last
            baseline) are centred on the award, with about 10px above and below. Measured. */}
        <span className="min-w-0 translate-y-[0.4px]">
          <span className="block truncate font-chart-title text-[1.25rem] leading-none tracking-[0.01em] text-zinc-900 dark:text-white">
            {name}
          </span>
          <span className="mt-[5px] block whitespace-nowrap text-sm leading-none text-zinc-600 dark:text-zinc-300">
            No.1 most Bitcoin-friendly
          </span>
        </span>
      </button>
    </div>
  );
}
