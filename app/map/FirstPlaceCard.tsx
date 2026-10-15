"use client";

import React, { useEffect, useState } from "react";
import Medal, { RingMedal } from "./Medal";
import { getFlagUrl } from "@/lib/flags";

// TEMPORARY (comparing two designs): ?first=a or ?first=b picks the version. Remove the one that
// is not chosen.
//  a: gold ring with a 1, the flag, name and "No. 1 most Bitcoin-friendly"
//  b: the ribbon medal, name and "No. 1 most Bitcoin-friendly", no flag
type Variant = "a" | "b";

// First place gets its own card under the search bar: no country reaches the top colour band, so
// the leader cannot be recognised by colour alone. It starts open so everyone sees it; the arrow
// slides it away to the left until only the medal is left, and the medal brings it back.
export default function FirstPlaceCard({
  code,
  name,
  onOpen,
}: {
  code: string;
  name: string;
  onOpen: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [variant, setVariant] = useState<Variant>("a");
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("first");
    const rafId = requestAnimationFrame(() => setVariant(v === "b" ? "b" : "a"));
    return () => cancelAnimationFrame(rafId);
  }, []);

  const mark =
    variant === "a" ? (
      // On very narrow screens the flag goes above the ring so the text keeps its width
      <span className="flex shrink-0 items-center gap-2 max-[359px]:flex-col-reverse max-[359px]:gap-1">
        <RingMedal className="h-7 w-7" />
        <img
          src={getFlagUrl(code, "w40")}
          alt=""
          className={`h-4 w-6 rounded-[2px] object-cover ring-1 ring-black/10 transition-opacity duration-200 ${
            collapsed ? "opacity-0" : ""
          }`}
        />
      </span>
    ) : (
      <Medal className="h-8 w-8 shrink-0" />
    );

  return (
    // Leaves room on phones for the zoom buttons at the right edge
    <div className="mt-2 flex max-w-[calc(100%-3.25rem)] sm:max-w-full">
      <div
        className={`ui-grain grid overflow-hidden rounded-lg border border-zinc-200 bg-white/95 shadow-lg backdrop-blur transition-[grid-template-columns] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-zinc-700 dark:bg-zinc-900/95 motion-reduce:transition-none ${
          collapsed ? "grid-cols-[auto_0fr]" : "grid-cols-[auto_1fr]"
        }`}
      >
        <button
          type="button"
          onClick={collapsed ? () => setCollapsed(false) : onOpen}
          className="flex items-center py-1.5 pl-2 pr-2 cursor-pointer"
          aria-label={collapsed ? `Show number 1: ${name}` : `Number 1: ${name}. Open details`}
          aria-expanded={!collapsed}
        >
          {mark}
        </button>
        <div className="flex min-w-0 items-stretch">
          <button
            type="button"
            onClick={onOpen}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
            className="min-w-0 py-1.5 pr-1 text-left cursor-pointer"
          >
            <span className="block truncate font-chart-caption text-[1.0625rem] leading-tight tracking-[0.02em] text-zinc-900 dark:text-white">
              {name}
            </span>
            <span className="block whitespace-nowrap text-xs text-zinc-600 dark:text-zinc-300">
              No. 1 most Bitcoin-friendly
            </span>
          </button>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            tabIndex={collapsed ? -1 : 0}
            aria-hidden={collapsed}
            className="flex shrink-0 items-center px-2 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
            aria-label="Minimise"
            title="Minimise"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
