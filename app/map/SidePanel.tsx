"use client";

import React, { useEffect, useRef } from "react";

export interface SidePanelProps {
  /** Name of the dialog for screen readers */
  label: string;
  title: string;
  onClose: () => void;
  /** True while the panel slides out (page.tsx plays the exit, then removes it) */
  closing?: boolean;
  children: React.ReactNode;
}

/**
 * The frame shared by the compare and "how it works" panels: the same place, size, look and
 * motion as the country details (Modal.tsx). Docked on the right from md up; on phones a sheet
 * that reaches up to just under the search bar. It carries data-country-panel, so the map keeps
 * countries clear of it in the same way.
 */
export const SidePanel: React.FC<SidePanelProps> = ({ label, title, onClose, closing = false, children }) => {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none md:items-stretch md:justify-end"
      role="dialog"
      aria-label={label}
    >
      <div
        className={`ui-grain flex flex-col w-full h-[calc(100dvh-4rem)] rounded-t-2xl border border-b-0 border-x-0 border-zinc-200/80 dark:border-zinc-700/55 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden relative pointer-events-auto country-panel-enter md:h-auto md:max-w-sm md:rounded-none md:border-y-0 md:border-l lg:max-w-md ${
          closing ? "country-panel-exit" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
        data-country-panel
        data-sheet-state="full"
      >
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 pt-4 pb-4 sm:px-6 md:pt-6">
          <h2 className="font-chart-display min-w-0 text-[1.75rem] leading-none sm:text-[2rem] text-zinc-900 dark:text-white">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-base leading-6 text-zinc-900 dark:text-white sm:px-6 md:pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
