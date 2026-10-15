"use client";

import React, { useState } from "react";
import Trophy from "./Trophy";

// First place gets its own card under the search bar: no country reaches the top colour band, so
// the leader cannot be recognised by colour alone. It starts open so everyone sees it; the x
// slides it away to the left until only the trophy is left, and the trophy brings it back.
export default function FirstPlaceCard({
  name,
  onOpen,
}: {
  name: string;
  onOpen: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // Leaves room on phones for the zoom buttons at the right edge
    <div className="mt-2 flex max-w-[calc(100%-3.25rem)] sm:max-w-full">
      <div
        className={`ui-grain grid overflow-hidden rounded-lg border border-zinc-200/80 bg-white/95 shadow-lg backdrop-blur transition-[grid-template-columns] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-zinc-700/55 dark:bg-zinc-900/95 motion-reduce:transition-none ${
          collapsed ? "grid-cols-[auto_0fr]" : "grid-cols-[auto_1fr]"
        }`}
      >
        <button
          type="button"
          onClick={collapsed ? () => setCollapsed(false) : onOpen}
          className="flex items-center py-1.5 pl-2 pr-2 cursor-pointer"
          aria-label={collapsed ? `Show the most Bitcoin-friendly country: ${name}` : `${name}, the most Bitcoin-friendly country. Open details`}
          aria-expanded={!collapsed}
        >
          <Trophy className="h-9 w-9 shrink-0" />
        </button>
        <div className="flex min-w-0 items-start">
          <button
            type="button"
            onClick={onOpen}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
            // Optical alignment: the two lines are set tight so the text (top of the capitals to the
            // last baseline) spans no more than the trophy does, and sit a hair low because the
            // trophy's weight is in its bowl and plinth. Measured for these sizes.
            className="min-w-0 translate-y-[0.75px] self-center py-1.5 pr-1 text-left cursor-pointer"
          >
            <span className="block truncate font-chart-caption text-[1.0625rem] leading-[1.05] tracking-[0.02em] text-zinc-900 dark:text-white">
              {name}
            </span>
            <span className="mt-[2px] block whitespace-nowrap text-xs leading-[1.15] text-zinc-600 dark:text-zinc-300">
              Most Bitcoin-friendly
            </span>
          </button>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
            className="ml-1 mr-1 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer"
            aria-label="Minimise"
            title="Minimise"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
