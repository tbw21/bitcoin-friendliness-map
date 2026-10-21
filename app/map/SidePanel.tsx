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
  const panelRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ startY: number; startTime: number; dragging: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const isSheet = () => !window.matchMedia("(min-width: 40rem)").matches;

  // On phones the sheet can be pulled down by its handle or header, as the country details can:
  // let go far enough down (or flick it) and it closes; otherwise it springs back
  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isSheet() || (event.pointerType === "mouse" && event.button !== 0)) return;
    dragRef.current = { startY: event.clientY, startTime: performance.now(), dragging: false };
  };
  const handleDragMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const panel = panelRef.current;
    if (!drag || !panel) return;
    const deltaY = event.clientY - drag.startY;
    // A few pixels of slack so taps on the buttons in the header still register as taps
    if (!drag.dragging && Math.abs(deltaY) > 6) {
      drag.dragging = true;
      panel.style.transition = "none";
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* pointer already released */
      }
    }
    if (drag.dragging) panel.style.transform = `translateY(${Math.max(0, deltaY)}px)`;
  };
  const handleDragEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const panel = panelRef.current;
    dragRef.current = null;
    if (!drag || !drag.dragging || !panel) return;
    suppressClickRef.current = true;
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
    const deltaY = event.clientY - drag.startY;
    const velocity = deltaY / Math.max(1, performance.now() - drag.startTime); // px per ms, + is down
    if (velocity > 0.6 || deltaY > panel.offsetHeight * 0.25) {
      onClose(); // the exit slides on from where the finger let go
      return;
    }
    panel.style.transition = "";
    panel.style.transform = "";
  };

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
      className="fixed inset-x-0 bottom-0 top-[var(--nav-h,0px)] z-50 flex items-end justify-center pointer-events-none dock:items-stretch dock:justify-end"
      role="dialog"
      aria-label={label}
    >
      <div
        ref={panelRef}
        className={`ui-grain flex flex-col w-full h-[calc(100dvh-var(--nav-h,0px)-4rem)] rounded-t-2xl border border-b-0 border-x-0 border-zinc-200/80 dark:border-zinc-700/55 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden relative pointer-events-auto country-panel-enter dock:h-auto dock:w-[var(--panel-w)] dock:rounded-none dock:border-y-0 dock:border-l ${
          closing ? "country-panel-exit" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
        data-country-panel
        data-sheet-state="full"
      >
        {/* Header: on the sheet it is also the drag area */}
        <div
          className="shrink-0 px-4 pb-4 touch-none sm:px-6 dock:touch-auto dock:pt-6"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          {/* Grab handle: shows the sheet can be pulled down; tapping it closes too */}
          <button
            type="button"
            onClick={() => {
              if (!suppressClickRef.current) onClose();
            }}
            className="flex w-full items-center justify-center pt-3 pb-3 cursor-grab dock:hidden"
            aria-label="Close"
            title="Drag down or tap to close"
          >
            <span className="h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
          </button>
          <div className="flex items-center justify-between gap-3">
          <h2 className="font-chart-display min-w-0 text-[1.75rem] leading-none sm:text-[2rem] text-zinc-900 dark:text-white">
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 dock:h-9 dock:w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-base leading-6 text-zinc-900 dark:text-white sm:px-6 dock:pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
