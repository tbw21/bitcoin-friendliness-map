"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getCountry, getCountriesByRank, formatScore } from "@/data/countriesCsv";
import { getFlagUrl, getFlagAltText } from "@/lib/flags";
import { legendEntries } from "@/data/legend";

export interface ModalProps {
  countryCode: string;
  onClose: () => void;
  onShowOnMap?: () => void;
  onSelectCountry?: (code: string) => void;
}

// Tinted background + border in the score's palette colour (badge and dimension cards)
function scoreTint(score: number): React.CSSProperties {
  return {
    backgroundColor: `color-mix(in srgb, var(--score-${score}) 25%, transparent)`,
    borderColor: `color-mix(in srgb, var(--score-${score}) 50%, transparent)`,
  };
}

// Get text color classes for dimension card content (light text for all scores)
function getScoreTextClass(score: number): string {
  // Use light text for all scores for better contrast on darker backgrounds
  return "text-white";
}


// Population is already pre-formatted in CSV (e.g., "10,5M", "335M", "—")
// Just display as-is or show "—" if null/empty
function formatPopulation(population: string | null): string {
  if (!population || population === "—") return "—";
  return population; // Display pre-formatted string as-is
}

// Reorder country names that have comma pattern: "X, Y" -> "Y X"
function formatCountryName(name: string): string {
  const match = name.match(/^(.+),\s*(.+)$/);
  if (match) {
    return `${match[2]} ${match[1]}`;
  }
  return name;
}

export const Modal: React.FC<ModalProps> = ({ countryCode, onClose, onShowOnMap, onSelectCountry }) => {
  const country = getCountry(countryCode);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [flagError, setFlagError] = useState(false);
  const [flagLoaded, setFlagLoaded] = useState(false);

  // Previous / next in rank order, wrapping around: before the first comes the last and vice versa
  const { previousCode, nextCode, totalRanked } = useMemo(() => {
    const ranked = getCountriesByRank();
    const idx = ranked.findIndex((c) => c.code === countryCode);
    const canStep = idx >= 0 && ranked.length > 1;
    return {
      previousCode: canStep ? ranked[(idx - 1 + ranked.length) % ranked.length].code : null,
      nextCode: canStep ? ranked[(idx + 1) % ranked.length].code : null,
      totalRanked: ranked.length,
    };
  }, [countryCode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && previousCode && onSelectCountry) {
        event.preventDefault();
        onSelectCountry(previousCode);
      } else if (event.key === "ArrowRight" && nextCode && onSelectCountry) {
        event.preventDefault();
        onSelectCountry(nextCode);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onSelectCountry, previousCode, nextCode]);

  // Below the md breakpoint (768px) the panel is a bottom sheet: it slides up from the bottom edge and can
  // be dragged down by its handle/header to close. From md up it is the docked side panel.
  const panelRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const dragRef = useRef<{ startY: number; startTime: number; dragging: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const isSheet = () => !window.matchMedia("(min-width: 768px)").matches;

  // Slide the sheet off the bottom edge, then close. The docked panel just closes.
  const closeAnimated = useCallback(() => {
    const panel = panelRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!panel || !isSheet() || reduceMotion) {
      onClose();
      return;
    }
    panel.style.transition = "transform 220ms cubic-bezier(0.4, 0, 1, 1)";
    panel.style.transform = "translateY(100%)";
    window.setTimeout(onClose, 220);
  }, [onClose]);

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
    if (!drag.dragging && deltaY > 6) {
      drag.dragging = true;
      panel.style.transition = "none";
      // Keep receiving the gesture even if the finger leaves the header; not fatal if unsupported
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
    // The release must not also count as a tap on the handle
    suppressClickRef.current = true;
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
    const deltaY = event.clientY - drag.startY;
    const velocity = deltaY / Math.max(1, performance.now() - drag.startTime);
    // Far enough or flicked fast enough: dismiss. Otherwise settle back into place.
    if (deltaY > 110 || velocity > 0.6) {
      closeAnimated();
    } else {
      panel.style.transition = "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)";
      panel.style.transform = "";
    }
  };

  useEffect(() => {
    // The close button is only shown on the docked panel; on the sheet the handle takes its place
    const closeButton = closeButtonRef.current;
    if (closeButton && closeButton.offsetParent !== null) closeButton.focus();
    else handleRef.current?.focus({ preventScroll: true });
  }, []);

  // Reset flag state when country changes
  useEffect(() => {
    setFlagError(false);
    setFlagLoaded(false);
  }, [countryCode]);

  const formattedName = formatCountryName(country.name);
  // Plain-language band for the score (Hostile … Very Friendly), same wording as the legend
  const scoreLabel = legendEntries.find((entry) => entry.score === country.score)?.label;
  const hasData = country.hasData;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none md:items-stretch md:justify-end"
      role="dialog"
      aria-label={`Details for ${formattedName}`}
    >
      {/* Fixed height on small screens so the sheet's top edge stays put whatever the content length;
          only the section under the header scrolls. */}
      <div
        ref={panelRef}
        className="flex flex-col w-full h-[80dvh] rounded-t-2xl border border-b-0 border-x-0 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden relative pointer-events-auto country-panel-enter md:h-auto md:max-w-sm md:rounded-none md:border-y-0 md:border-l lg:max-w-md"
        onClick={(event) => event.stopPropagation()}
        data-country-panel
      >
        {/* Header: stays in place; on the sheet it is also the drag area */}
        <div
          className="shrink-0 px-4 pb-1 touch-none sm:px-5 md:touch-auto md:pt-5"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          {/* Grab handle: shows the sheet can be pulled down; tapping it closes too, so there is
              always a way to close without a drag gesture (keyboard, screen reader, switch). */}
          <button
            ref={handleRef}
            type="button"
            onClick={() => {
              if (!suppressClickRef.current) closeAnimated();
            }}
            className="flex w-full items-center justify-center pt-2.5 pb-3 cursor-grab md:hidden"
            aria-label="Close details"
            title="Drag down or tap to close"
          >
            <span className="h-1.5 w-10 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
          </button>

          {/* Row 1: flag on the left, buttons on the right, centred on one line */}
          <div className="mb-3 flex items-center justify-between gap-3">
            {/* Flag with fixed dimensions to prevent layout shift */}
            <div className="h-7 w-11 shrink-0 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {!flagError ? (
                <img
                  src={getFlagUrl(country.code, "w80")}
                  alt={getFlagAltText(formattedName)}
                  className={`h-7 w-auto object-cover transition-opacity ${flagLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setFlagLoaded(true)}
                  onError={() => setFlagError(true)}
                />
              ) : null}
            </div>
            <div className="flex justify-end gap-1.5 shrink-0">
              {previousCode && onSelectCountry && (
                <button
                  type="button"
                  onClick={() => onSelectCountry(previousCode)}
                  className="flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Previous country (up rank list)"
                  title="Previous country"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {nextCode && onSelectCountry && (
                <button
                  type="button"
                  onClick={() => onSelectCountry(nextCode)}
                  className="flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Next country (down rank list)"
                  title="Next country"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
              {onShowOnMap && (
                <button
                  type="button"
                  onClick={onShowOnMap}
                  className="flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Show country on map"
                  title="Show on map"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </button>
              )}
              {/* Close button: docked panel only (the sheet closes by its handle) */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="hidden md:flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Close"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Row 2: country name with its score pill; the pill drops below the name when it does not fit beside it */}
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="min-w-0 text-xl font-semibold sm:text-2xl text-zinc-900 dark:text-white">
              {formattedName}
            </h2>
            {/* Optical alignment: the heading's letters sit below the middle of its line box (space is
                reserved above for accents), so a box-centred pill looks high. Nudge it down to the
                middle of the letters (halfway between the centre of the capitals and of the lowercase),
                measured for the 20px and 24px heading sizes. */}
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap shrink-0 text-white translate-y-[1.75px] sm:translate-y-[1.6px]"
              style={
                hasData
                  ? scoreTint(country.score)
                  : { backgroundColor: "var(--no-data)", borderColor: "color-mix(in srgb, var(--no-data) 60%, white)" }
              }
            >
              {hasData ? `${scoreLabel ? `${scoreLabel} · ` : ""}${formatScore(country)} / 5` : "No data"}
            </span>
          </div>

          {/* Rank, capital, population underneath the heading+buttons row */}
          <div key={`meta-${countryCode}`} className="mb-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed country-panel-content">
          {country.rankGlobal && (
            <span className="inline-block mr-3">
              Rank #{country.rankGlobal}
              {totalRanked > 0 ? ` of ${totalRanked}` : ""}
            </span>
          )}
          <span className="inline-block mr-3">Capital: {country.capital ?? "—"}</span>
          <span className="inline-block">Population: {formatPopulation(country.population)}</span>
          </div>
        </div>

        {/* Scrolls on its own when the content is taller than the space under the header */}
        <div
          key={`body-${countryCode}`}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-4 px-4 pt-1 pb-[max(1rem,env(safe-area-inset-bottom))] text-sm leading-relaxed text-zinc-900 dark:text-white sm:px-5 md:pb-5"
        >
          {!hasData && (
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-800/60 p-3 text-sm country-panel-content">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
                No data yet
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                This country or territory has not been scored yet.
              </p>
            </div>
          )}

          {/* Key dimensions */}
          <div className={`grid gap-3 sm:grid-cols-2 md:grid-cols-1 stagger-children ${hasData ? "" : "hidden"}`}>
            <div className="rounded-lg border p-2.5" style={scoreTint(country.lcScore ?? 3)}>
              <div className="mb-1 flex items-center justify-between">
                <div className={`text-[0.7rem] font-semibold uppercase tracking-wide ${getScoreTextClass(country.lcScore ?? 3)}`}>
                  Legal clarity
                </div>
                {country.lcScore !== null && (
                  <span className={`text-xs font-bold ${getScoreTextClass(country.lcScore ?? 3)}`}>{country.lcScore}</span>
                )}
              </div>
              <p className={`text-sm sm:text-[0.9rem] ${getScoreTextClass(country.lcScore ?? 3)}`}>
                {country.legalClarity || "—"}
              </p>
            </div>

            <div className="rounded-lg border p-2.5" style={scoreTint(country.ttScore ?? 3)}>
              <div className="mb-1 flex items-center justify-between">
                <div className={`text-[0.7rem] font-semibold uppercase tracking-wide ${getScoreTextClass(country.ttScore ?? 3)}`}>
                  Tax treatment
                </div>
                {country.ttScore !== null && (
                  <span className={`text-xs font-bold ${getScoreTextClass(country.ttScore ?? 3)}`}>{country.ttScore}</span>
                )}
              </div>
              <p className={`text-sm sm:text-[0.9rem] ${getScoreTextClass(country.ttScore ?? 3)}`}>
                {country.taxTreatment || "—"}
              </p>
            </div>

            <div className="rounded-lg border p-2.5" style={scoreTint(country.bfcScore ?? 3)}>
              <div className="mb-1 flex items-center justify-between">
                <div className={`text-[0.7rem] font-semibold uppercase tracking-wide ${getScoreTextClass(country.bfcScore ?? 3)}`}>
                  Banking &amp; fiat rails
                </div>
                {country.bfcScore !== null && (
                  <span className={`text-xs font-bold ${getScoreTextClass(country.bfcScore ?? 3)}`}>{country.bfcScore}</span>
                )}
              </div>
              <p className={`text-sm sm:text-[0.9rem] ${getScoreTextClass(country.bfcScore ?? 3)}`}>
                {country.bankingFiatRails || "—"}
              </p>
            </div>

            <div className="rounded-lg border p-2.5" style={scoreTint(country.rmScore ?? 3)}>
              <div className="mb-1 flex items-center justify-between">
                <div className={`text-[0.7rem] font-semibold uppercase tracking-wide ${getScoreTextClass(country.rmScore ?? 3)}`}>
                  Residency &amp; mobility
                </div>
                {country.rmScore !== null && (
                  <span className={`text-xs font-bold ${getScoreTextClass(country.rmScore ?? 3)}`}>{country.rmScore}</span>
                )}
              </div>
              <p className={`text-sm sm:text-[0.9rem] ${getScoreTextClass(country.rmScore ?? 3)}`}>
                {country.residencyMobility || "—"}
              </p>
            </div>
          </div>

          {country.notes && (
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-800/60 p-2.5 text-sm stagger-last">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
                Notes
              </h3>
              <p className="text-sm leading-relaxed whitespace-pre-line text-zinc-500 dark:text-zinc-400">
                {country.notes}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
