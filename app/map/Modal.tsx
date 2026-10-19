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
  /** Bottom sheet position on phones; ignored by the docked side panel */
  sheetState?: "full" | "peek";
  onSheetStateChange?: (state: "full" | "peek") => void;
  /** True while the details are on their way out (page.tsx plays the exit, then removes them) */
  closing?: boolean;
  /** Opens the comparison with this country in it */
  onCompare?: () => void;
}

// The Bitcoin Way's residency service. The link says where the visitor came from (the map, which
// country, which spot in the panel), so leads can be traced back.
const PLAN_B_URL = "https://www.thebitcoinway.com/services/plan-b-residency-programs";
function planBLink(code: string, placement: string): string {
  const params = new URLSearchParams({
    utm_source: "bitcoin-friendliness-map",
    utm_medium: "cta",
    utm_campaign: "plan-b",
    utm_content: `${code.toLowerCase()}-${placement}`,
  });
  return `${PLAN_B_URL}?${params}`;
}

// Call to action for the Plan B residency service: a short pitch and a link that opens the
// service page in a new tab, so the map stays where it was
// Background of the Plan B banner on thebitcoinway.com (.banner-webinar_*): the Panama photo from
// the site's own CDN, under the same navy gradient, on the same navy base
const PLAN_B_PHOTO = "https://cdn.prod.website-files.com/66ed44315e6f361d9b343f37/6ac756354bd6ed04e6960ae7_panama.avif";

function PlanBCta({ title, text, label, href, className = "" }: { title: string; text: string; label: string; href: string; className?: string }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-lg bg-[#001524] p-3 text-[#f2eee6] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PLAN_B_PHOTO} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(90deg, rgba(0,21,36,0.92) 0%, rgba(0,21,36,0.8) 55%, rgba(0,21,36,0.6) 100%)" }}
      />
      <h3 className="mb-1 text-base font-semibold">{title}</h3>
      <p className="mb-3 text-base leading-6 opacity-80">{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex h-10 items-center gap-2 rounded-full bg-[#eb8500] px-5 text-base text-[#000f1a] transition-colors hover:bg-[#f59a1f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb8500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001524]"
      >
        {label}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}

// Share of the screen height the sheet covers in its "peek" position. Keep in step with
// the peek rule in map.css and SHEET_PEEK_FRACTION in WorldMap.tsx.
const SHEET_PEEK_FRACTION = 1 / 3;

// Tinted background + border in the score's palette colour (badge and dimension cards)
export function scoreTint(score: number): React.CSSProperties {
  return {
    // Strengths differ between light and dark mode (--tint-fill / --tint-border in map.css)
    backgroundColor: `color-mix(in srgb, var(--score-${score}) var(--tint-fill, 25%), transparent)`,
    borderColor: `color-mix(in srgb, var(--score-${score}) var(--tint-border, 50%), transparent)`,
  };
}

// Text colour for the tinted badge and dimension cards: dark on the pale tints of light mode,
// white on the deep tints of dark mode
function getScoreTextClass(score: number): string {
  void score;
  return "text-zinc-900 dark:text-white";
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

export const Modal: React.FC<ModalProps> = ({
  countryCode,
  onClose,
  onShowOnMap,
  onSelectCountry,
  sheetState = "full",
  closing = false,
  onSheetStateChange,
  onCompare,
}) => {
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

  // Below 640px (the "dock" variant) the panel is a bottom sheet: it slides up from the bottom edge and can
  // be dragged down by its handle/header to close. From md up it is the docked side panel.
  const panelRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const dragRef = useRef<{ startY: number; startTime: number; dragging: boolean; base: number } | null>(null);
  const suppressClickRef = useRef(false);
  const isSheet = () => !window.matchMedia("(min-width: 40rem)").matches;

  // Closing: page.tsx plays the exit (the sheet slides down, the docked panel slides out to the
  // right) and then removes the details
  const closeAnimated = useCallback(() => {
    onClose();
  }, [onClose]);

  // The sheet rests at one of three positions: full (0), peek, or closed (its own height).
  // Resting positions come from CSS ([data-sheet-state] in map.css); while a finger is dragging,
  // an inline transform follows it, and on release the inline style is dropped so the CSS
  // position (and its transition) takes over.
  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel || !isSheet() || (event.pointerType === "mouse" && event.button !== 0)) return;
    const restTop = window.innerHeight - panel.offsetHeight;
    const base = Math.max(0, panel.getBoundingClientRect().top - restTop);
    dragRef.current = { startY: event.clientY, startTime: performance.now(), dragging: false, base };
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
      // Keep receiving the gesture even if the finger leaves the header; not fatal if unsupported
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        /* pointer already released */
      }
    }
    if (drag.dragging) panel.style.transform = `translateY(${Math.max(0, drag.base + deltaY)}px)`;
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

    const height = panel.offsetHeight;
    const peek = Math.max(0, height - window.innerHeight * SHEET_PEEK_FRACTION);
    const deltaY = event.clientY - drag.startY;
    const position = Math.min(height, Math.max(0, drag.base + deltaY));
    const velocity = deltaY / Math.max(1, performance.now() - drag.startTime); // px per ms, + is down

    let target: "full" | "peek" | "closed";
    if (velocity > 1.5 && sheetState === "full") target = "closed"; // hard flick: all the way
    else if (velocity > 0.6) target = sheetState === "full" ? "peek" : "closed"; // flick down: one step
    else if (velocity < -0.6) target = "full"; // flick up
    else if (position < peek / 2) target = "full";
    else if (position < (peek + height) / 2) target = "peek";
    else target = "closed";

    if (target === "closed") {
      closeAnimated();
      return;
    }
    // Hand back to CSS: it animates from where the finger let go to the resting position
    panel.style.transition = "";
    panel.style.transform = "";
    if (target !== sheetState) onSheetStateChange?.(target);
  };

  // Tapping the handle: expands a peeking sheet, closes a full one
  const handleHandleClick = () => {
    if (suppressClickRef.current) return;
    if (isSheet() && sheetState === "peek") onSheetStateChange?.("full");
    else closeAnimated();
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
      className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none dock:items-stretch dock:justify-end"
      role="dialog"
      aria-label={`Details for ${formattedName}`}
    >
      {/* Fixed height on small screens so the sheet's top edge stays put whatever the content length;
          only the section under the header scrolls. The top edge sits 8px below the search bar,
          where the first-place card and the zoom buttons start, so the sheet covers them:
          16px + 40px bar + 8px = 64px (4rem). Keep in step with the search bar's position and
          height in WorldMap.tsx. */}
      <div
        ref={panelRef}
        className={`ui-grain flex flex-col w-full h-[calc(100dvh-4rem)] rounded-t-2xl border border-b-0 border-x-0 border-zinc-200/80 dark:border-zinc-700/55 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden relative pointer-events-auto country-panel-enter dock:h-auto dock:w-[var(--panel-w)] dock:rounded-none dock:border-y-0 dock:border-l ${closing ? "country-panel-exit" : ""}`}
        onClick={(event) => event.stopPropagation()}
        data-country-panel
        data-sheet-state={sheetState}
      >
        {/* Header: stays in place; on the sheet it is also the drag area */}
        <div
          className="shrink-0 px-4 pb-1 touch-none sm:px-6 dock:touch-auto dock:pt-6"
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
            onClick={handleHandleClick}
            className="flex w-full items-center justify-center pt-3 pb-3 cursor-grab dock:hidden"
            aria-label={sheetState === "peek" ? "Expand details" : "Close details"}
            title={sheetState === "peek" ? "Drag up or tap to expand" : "Drag down or tap to close"}
          >
            <span className="h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
          </button>

          {/* Row 1: flag on the left, buttons on the right, centred on one line */}
          <div className="mb-3 flex items-center justify-between gap-3">
            {/* Flag with fixed dimensions to prevent layout shift */}
            <div className="h-7 w-11 shrink-0 flex items-center justify-center rounded border border-zinc-200/80 dark:border-zinc-700/55 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
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
            <div className="flex justify-end gap-2 shrink-0">
              {previousCode && onSelectCountry && (
                <button
                  type="button"
                  onClick={() => onSelectCountry(previousCode)}
                  className="flex h-10 w-10 dock:h-9 dock:w-9 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
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
                  className="flex h-10 w-10 dock:h-9 dock:w-9 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
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
                  className="flex h-10 w-10 dock:h-9 dock:w-9 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Show country on map"
                  title="Show on map"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </button>
              )}
              {onCompare && (
                <button
                  type="button"
                  onClick={onCompare}
                  className="flex h-10 w-10 dock:h-9 dock:w-9 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Compare with other countries"
                  title="Compare"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="4" y="10" width="4" height="10" rx="1" />
                    <rect x="10" y="4" width="4" height="16" rx="1" />
                    <rect x="16" y="13" width="4" height="7" rx="1" />
                  </svg>
                </button>
              )}
              {/* Close button, to the right of the others (on phones the sheet slides away, as when
                  it is dragged down) */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeAnimated}
                className="flex h-10 w-10 dock:h-9 dock:w-9 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
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
            <h2 className="font-chart-display min-w-0 text-[1.75rem] leading-none sm:text-[2rem] text-zinc-900 dark:text-white">
              {formattedName}
            </h2>
            {/* Optical alignment: Kepler's letters sit above the middle of the heading's line box, so
                a box-centred pill looks low. Nudge it up to the middle of the letters (halfway
                between the centre of the capitals and of the lowercase), measured for the 28px and
                32px heading sizes. */}
            <span
              className={`inline-flex items-center rounded-full border px-3 py-[5px] text-sm font-semibold whitespace-nowrap shrink-0 -translate-y-[1.4px] sm:-translate-y-[2.45px] ${
                hasData ? "text-zinc-900 dark:text-white" : "text-white"
              }`}
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
          <div key={`meta-${countryCode}`} className="mb-2 text-base text-zinc-600 dark:text-zinc-400 leading-6 country-panel-content">
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
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-4 px-4 pt-1 pb-[max(1rem,env(safe-area-inset-bottom))] text-base leading-6 text-zinc-900 dark:text-white sm:px-6 dock:pb-6"
        >
          {!hasData && (
            <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50/80 dark:bg-zinc-800/60 p-3 text-base country-panel-content">
              <h3 className="mb-1 text-base font-semibold text-zinc-900 dark:text-white">
                No data yet
              </h3>
              <p className="text-base leading-6 text-zinc-600 dark:text-zinc-400">
                This country or territory has not been scored yet.
              </p>
            </div>
          )}

          {/* Key dimensions */}
          <div className={`grid gap-3 stagger-children ${hasData ? "" : "hidden"}`}>
            {country.areas.map((area) => {
              // Scores run 0 to 5; the tints only exist for bands 1 to 5, so 0 uses the lowest
              const band = Math.min(5, Math.max(1, Math.round(area.score ?? 3)));
              const textClass = getScoreTextClass(band);
              return (
                <React.Fragment key={area.key}>
                <div className="rounded-lg border p-3" style={scoreTint(band)}>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <div className={`text-base font-semibold ${textClass}`}>{area.label}</div>
                    {area.score !== null && (
                      <span
                        className={`shrink-0 whitespace-nowrap text-base font-bold tabular-nums ${textClass}`}
                        aria-label={`Score ${area.score} out of 5`}
                      >
                        {area.score} <span className="font-medium opacity-70">/ 5</span>
                      </span>
                    )}
                  </div>
                  <p className={`text-base ${textClass}`}>{area.text || "—"}</p>
                </div>
                {/* Panama, the top country, gets a second call to action right after "Moving here" */}
                {area.key === "residency" && country.code === "PA" && (
                  <PlanBCta
                    title="Make Panama your Plan B"
                    text="We take care of your Panama residency from start to finish. You only send us the documents."
                    label="See how it works"
                    href={planBLink(country.code, "after-residency")}
                  />
                )}
                </React.Fragment>
              );
            })}
          </div>

          {country.summary && (
            <div className="rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-zinc-50/80 dark:bg-zinc-800/60 p-3 text-base stagger-last">
              <h3 className="mb-1 text-base font-semibold text-zinc-900 dark:text-white">
                Summary
              </h3>
              <p className="text-base leading-6 whitespace-pre-line text-zinc-600 dark:text-zinc-400">
                {country.summary}
              </p>
            </div>
          )}

          {hasData && (
            <PlanBCta
              className="stagger-last"
              title="Thinking about a second residency?"
              text="We guide you through the whole process, one step at a time. You only provide the documents, and we handle the rest."
              label="Explore Plan B residency"
              href={planBLink(country.code, "end")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
