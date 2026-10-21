"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { getCountry, getAllCountriesArray, initializeCountries, formatScore } from "@/data/countriesCsv";
import { legendEntries } from "@/data/legend";
import { getFlagUrl, getFlagAltText } from "@/lib/flags";
import FirstPlaceCard from "./FirstPlaceCard";
import { withBasePath } from "@/lib/basePath";
import "./map.css";

export interface WorldMapProps {
  selectedCode: string | null;
  /** fromList: chosen from search, the top-5 list or the first-place card (opens the details in full) */
  onSelectCountry: (code: string, fromList?: boolean) => void;
  zoomToCountryCode?: string | null;
  onZoomToCountryDone?: () => void;
  /** Set when the previous/next arrows move to another country: bring it into view */
  stepToCountryCode?: string | null;
  onStepToCountryDone?: () => void;
  highlightOnlyCode?: string | null;
  onClearHighlightOnly?: () => void;
  /** Called when the empty map (not a country) is clicked while a country's details are open */
  onClearSelection?: () => void;
  // True while the details panel slides out after closing (the selection is already cleared)
  panelClosing?: boolean;
  /** A side panel (country details, compare or info) is docked on the right on wide screens */
  docked?: boolean;
  /** Countries being compared; null when the compare panel is closed. While comparing, a click on
      a country adds it to (or takes it out of) the comparison instead of opening its details. */
  compareCodes?: string[] | null;
  onToggleCompareCountry?: (code: string) => void;
  onOpenCompare?: () => void;
  onOpenInfo?: () => void;
  compareOpen?: boolean;
  infoOpen?: boolean;
}

// Where feedback and bug reports go (the visitor's own email app opens with the details filled in)
const FEEDBACK_EMAIL = "info@thebitcoinway.com";

function getCountryClasses(
  code: string,
  selectedCode: string | null,
  selectedLegendScores: number[],
  highlightOnlyCode: string | null,
  compareCodes: string[] | null = null
): string {
  const data = getCountry(code);
  const base = ["country-shape"];

  // is-rated keeps the shape clickable; countries without data get their own colour
  base.push(data.hasData ? `score-${data.score}` : "no-data", "is-rated");

  // The open country (also when located with the pin button) keeps its full colour and gets a
  // white outline. Every other country is toned down but keeps its own score colour, so the
  // open one stands out and the colours can still be read while stepping between countries.
  // While comparing, the compared countries are the ones that stand out.
  const openCode = selectedCode ?? highlightOnlyCode;
  if (compareCodes) {
    if (compareCodes.includes(code)) base.push("selected-country");
    else if (compareCodes.length > 0) base.push("dimmed");
  } else if (openCode === code) {
    base.push("selected-country");
  } else if (openCode !== null) {
    base.push("dimmed");
  }

  // Only the score filter takes colour away: countries whose score is not among the chosen ones
  if (selectedLegendScores.length > 0 && (!data.hasData || !selectedLegendScores.includes(data.score))) {
    base.push("filtered-out");
  }

  return base.join(" ");
}

function getCountryLabel(code: string): string {
  const data = getCountry(code);
  if (!data.hasData) return `${data.name} — no data yet`;
  return `${data.name} — Bitcoin friendliness score ${data.score} out of 5`;
}

// Small score indicator used in the top-countries list and search results.
// A score of 0 means the country has no data.
function ScoreChip({ score, label }: { score: number; label: string }) {
  return (
    <span
      className="ml-auto shrink-0 inline-flex items-center gap-1 text-base font-semibold tabular-nums text-zinc-700 dark:text-zinc-200"
      aria-label={score ? `Score ${label} out of 5` : "No data"}
    >
      <span
        className="h-2 w-2 rounded-full ring-1 ring-black/20 dark:ring-0"
        style={{ backgroundColor: score ? `var(--score-${score})` : "var(--no-data)" }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

// How much one press of a zoom button (or +/-) changes the zoom
const ZOOM_STEP = 1.5;

// Zooming in is only loosely limited: far enough that even the smallest shape on the map
// (Vatican City, about 0.03 of the map's 1000 units) can fill a good part of the screen.
// Zoom is a multiple of the map's on-screen size, so the limit scales with the map's width:
// roughly 5,500x on a 1100px-wide map and 17,500x on a phone. Zooming out stops at 1 (whole world).
function getMaxZoom(root: HTMLElement | null): number {
  const width = root?.querySelector("svg")?.clientWidth || root?.clientWidth || 1100;
  return Math.max(10, 6_000_000 / width);
}

// Which country a pointer event landed on. Country shapes carry their code as the element id.
// Small islands also have an enlarged tap area around them (their innermost coast ring, see
// scripts/make-coast-rings.py); those carry the code in data-code.
function getCountryCode(target: EventTarget | null): string | null {
  if (!(target instanceof SVGPathElement)) return null;
  if (target.id) return target.id.toUpperCase();
  return target.getAttribute("data-code");
}

// The country's own shape (not its tap area)
function getCountryPath(root: HTMLElement | null, code: string): SVGPathElement | null {
  return (
    Array.from(root?.querySelectorAll<SVGPathElement>("svg path[id]") ?? []).find(
      (path) => path.id.toUpperCase() === code
    ) ?? null
  );
}

// Width (px) of the map hidden behind the country panel when it is docked to the right edge
function getRightInset(root: HTMLElement): number {
  const panel = document.querySelector<HTMLElement>("[data-country-panel]");
  if (!panel) return 0;
  const rootRect = root.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const isDocked = panelRect.height >= rootRect.height * 0.9 && panelRect.left > rootRect.left;
  return isDocked ? Math.max(0, rootRect.right - panelRect.left) : 0;
}

// Share of the screen height the phone bottom sheet covers in its "peek" position.
// Keep in step with Modal.tsx and the peek rule in map.css.
const SHEET_PEEK_FRACTION = 1 / 3;

// Space at the top and bottom of the map that is covered on phones: the search bar above, and
// below it the legends (taller when expanded) or the bottom sheet when it is peeking. The country panel reports its state in data-sheet-state.
// (The sheet's own position is not measured because it may still be sliding into place.)
function getVerticalInsets(root: HTMLElement): { top: number; bottom: number } {
  if (window.matchMedia("(min-width: 40rem)").matches) return { top: 0, bottom: 0 };
  const rootRect = root.getBoundingClientRect();
  // Pan and zoom are measured inside the map's padding, so take the padding off both insets
  const padding = parseFloat(getComputedStyle(root).paddingTop) || 0;
  const search = document.querySelector<HTMLElement>("[data-map-search]");
  const top = search ? Math.max(0, search.getBoundingClientRect().bottom - rootRect.top - padding) : 0;
  const panel = document.querySelector<HTMLElement>("[data-country-panel]");
  const peeking = panel?.getAttribute("data-sheet-state") === "peek";
  const sheet = peeking
    ? Math.max(0, rootRect.bottom - window.innerHeight * (1 - SHEET_PEEK_FRACTION) - padding)
    : 0;
  // Open legends cover the bottom of the map too (they span the full width on phones)
  const legendsEl = document.querySelector<HTMLElement>("[data-map-legends]");
  const legends = legendsEl ? Math.max(0, rootRect.bottom - legendsEl.getBoundingClientRect().top - padding) : 0;
  return { top, bottom: Math.max(sheet, legends) };
}

// Bounding box of a country's main landmass: rings smaller than a tenth of the largest
// one (remote islands, small exclaves) are ignored so e.g. Japan centres on its main islands.
function getMainLandBBox(path: SVGPathElement): { x: number; y: number; width: number; height: number } {
  const fallback = path.getBBox();
  const rings = (path.getAttribute("d") || "")
    .split("M")
    .map((ring) => (ring.match(/-?\d*\.?\d+/g) || []).map(Number))
    .filter((nums) => nums.length >= 6)
    .map((nums) => {
      let area = 0;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (let i = 0; i < nums.length - 1; i += 2) {
        const x = nums[i], y = nums[i + 1];
        const nx = nums[(i + 2) % nums.length], ny = nums[(i + 3) % nums.length];
        area += x * ny - nx * y;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
      return { area: Math.abs(area) / 2, minX, minY, maxX, maxY };
    });
  if (rings.length === 0) return fallback;
  const largest = Math.max(...rings.map((r) => r.area));
  const main = rings.filter((r) => r.area >= largest * 0.1);
  const minX = Math.min(...main.map((r) => r.minX));
  const minY = Math.min(...main.map((r) => r.minY));
  const maxX = Math.max(...main.map((r) => r.maxX));
  const maxY = Math.max(...main.map((r) => r.maxY));
  if (![minX, minY, maxX, maxY].every(Number.isFinite)) return fallback;
  return { x: minX, y: minY, width: Math.max(maxX - minX, 0.01), height: Math.max(maxY - minY, 0.01) };
}

// Reorder country names that have comma pattern: "X, Y" -> "Y X"
// Example: "Iran, Islamic Republic of" -> "Islamic Republic of Iran"
function formatCountryName(name: string): string {
  const match = name.match(/^(.+),\s*(.+)$/);
  if (match) {
    return `${match[2]} ${match[1]}`;
  }
  return name;
}

// Pre-process SVG markup to embed classes directly in the HTML string
function buildSvgMarkupWithClasses(
  rawSvg: string,
  selectedCode: string | null,
  selectedLegendScores: number[]
): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawSvg, "image/svg+xml");
    const svg = doc.querySelector("svg");
    if (!svg) return rawSvg;

    const paths = svg.querySelectorAll<SVGPathElement>("path[id]");

    paths.forEach((path) => {
      const rawId = path.id;
      if (!rawId) return;
      const code = rawId.toUpperCase();
      const className = getCountryClasses(code, selectedCode, selectedLegendScores, null);

      // Set class directly in the parsed DOM
      path.setAttribute("class", className);
      // Remove any inline fill
      path.removeAttribute("fill");
      // Set accessibility attributes
      path.setAttribute("role", "button");
      path.setAttribute("tabindex", "0");
      path.setAttribute("aria-label", getCountryLabel(code));
    });

    // Serialize back to string
    const serializer = new XMLSerializer();
    return serializer.serializeToString(svg);
  } catch (error) {
    console.error("Failed to pre-process SVG:", error);
    return rawSvg;
  }
}

export const WorldMap: React.FC<WorldMapProps> = ({
  selectedCode,
  onSelectCountry,
  zoomToCountryCode = null,
  onZoomToCountryDone,
  stepToCountryCode = null,
  onStepToCountryDone,
  highlightOnlyCode = null,
  onClearHighlightOnly,
  onClearSelection,
  panelClosing = false,
  docked = false,
  compareCodes = null,
  onToggleCompareCountry,
  onOpenCompare,
  onOpenInfo,
  compareOpen = false,
  infoOpen = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const listenersAttachedRef = useRef(false);
  const highlightOnlyCodeRef = useRef<string | null>(null);
  const onClearHighlightOnlyRef = useRef<(() => void) | undefined>(undefined);
  const onClearSelectionRef = useRef<(() => void) | undefined>(undefined);
  // The open country, for the click handler (a click on it closes it)
  const selectedCodeRef = useRef<string | null>(null);
  // Whether a panel has been docked yet: the zoom controls only slide back to the edge after a
  // panel closes; on first load they just fade in with the map
  const [hasDocked, setHasDocked] = useState(false);
  useEffect(() => {
    if (docked) setHasDocked(true);
  }, [docked]);
  // Compare mode, for the click handler
  const compareCodesRef = useRef<string[] | null>(null);
  const onToggleCompareRef = useRef<((code: string) => void) | undefined>(undefined);
  useEffect(() => {
    compareCodesRef.current = compareCodes;
    onToggleCompareRef.current = onToggleCompareCountry;
  }, [compareCodes, onToggleCompareCountry]);
  useEffect(() => {
    selectedCodeRef.current = selectedCode;
  }, [selectedCode]);
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  // Use refs to track current zoom/pan values for event handlers
  const zoomRef = useRef(1);
  const panXRef = useRef(0);
  const panYRef = useRef(0);
  const isPanningRef = useRef(false);
  const lastPanPointRef = useRef({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  // Both legends start folded, so the map gets the space
  const [legendOpen, setLegendOpen] = useState(false);
  const [selectedLegendScores, setSelectedLegendScores] = useState<number[]>([]);
  const toggleLegendScore = useCallback((score: number) => {
    setSelectedLegendScores((prev) =>
      prev.includes(score) ? prev.filter((s) => s !== score) : [...prev, score]
    );
  }, []);
  const [topCountriesLegendOpen, setTopCountriesLegendOpen] = useState(false);

  // Open legends fold away when you click or tap anywhere outside them (the map, the search bar,
  // the details panel). A drag that starts outside, such as panning the map, does not count.
  useEffect(() => {
    if (!legendOpen && !topCountriesLegendOpen) return;
    let start: { x: number; y: number; outside: boolean } | null = null;
    const onDown = (event: PointerEvent) => {
      const target = event.target as Element | null;
      start = { x: event.clientX, y: event.clientY, outside: !target?.closest("[data-map-legends]") };
    };
    const onUp = (event: PointerEvent) => {
      if (start?.outside && Math.hypot(event.clientX - start.x, event.clientY - start.y) < 6) {
        setLegendOpen(false);
        setTopCountriesLegendOpen(false);
      }
      start = null;
    };
    window.addEventListener("pointerdown", onDown, true);
    window.addEventListener("pointerup", onUp, true);
    return () => {
      window.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("pointerup", onUp, true);
    };
  }, [legendOpen, topCountriesLegendOpen]);
  const [topCountries, setTopCountries] = useState<Array<{ code: string; name: string; rank: number; score: number; scoreLabel: string }>>([]);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  // When the last touch happened: browsers follow a tap with made-up mouse events, which must not
  // show the hover label (on a touch screen nothing would ever move away to hide it again)
  const lastTouchTimeRef = useRef(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ code: string; name: string; score: number; scoreLabel: string }>>([]);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchResultsRef = useRef<HTMLDivElement | null>(null);
  const touchStartDistanceRef = useRef<number | null>(null);
  const touchStartZoomRef = useRef<number>(1);
  const touchStartPanRef = useRef({ x: 0, y: 0 });
  const touchStartCenterRef = useRef({ x: 0, y: 0 });
  const touchStartCenterViewportRef = useRef({ x: 0, y: 0 });
  const lastDoubleClickTimeRef = useRef(0);

  // Programmatic moves animate (see [data-animating] in map.css); direct manipulation must not,
  // so drag, wheel and pinch call stopAnimation() first.
  const animationTimerRef = useRef<number | null>(null);
  const mapGrainRef = useRef<HTMLDivElement | null>(null);
  // The map file's own viewBox size (map units), read once when the SVG is inserted
  const baseViewBoxRef = useRef<{ width: number; height: number } | null>(null);
  // Sharp rendering at any zoom: while the view is moving it is a CSS transform of the SVG (fast,
  // but a stretched picture). Shortly after it settles, the view is "baked" into the SVG's viewBox
  // and the transform reset, so the browser redraws the shapes crisply at that zoom.
  const bakedViewRef = useRef({ zoom: 1, panX: 0, panY: 0 });
  const bakeTimerRef = useRef<number | null>(null);
  // The transform last applied, relative to which baked view (for gliding zooms, see below)
  const appliedViewRef = useRef<{ tx: number; ty: number; k: number; baked: { zoom: number; panX: number; panY: number } } | null>(null);
  const bakeNowRef = useRef<(() => void) | null>(null);
  // Latest zoomToPath (defined further down), for the event listeners attached once
  const zoomToPathRef = useRef<((path: SVGPathElement, keepZoom?: boolean) => void) | null>(null);
  // The view the last "zoom to country" produced; lets a second double-click zoom back out
  const zoomedToRef = useRef<{ code: string; zoom: number; panX: number; panY: number } | null>(null);
  // The map's wheel handler, shared with the legends so scrolling over them behaves the same
  const wheelHandlerRef = useRef<((event: WheelEvent) => void) | null>(null);
  const stopAnimation = useCallback(() => {
    if (animationTimerRef.current !== null) window.clearTimeout(animationTimerRef.current);
    animationTimerRef.current = null;
    containerRef.current?.removeAttribute("data-animating");
    mapGrainRef.current?.removeAttribute("data-animating");
  }, []);
  const startAnimation = useCallback(() => {
    const root = containerRef.current;
    if (!root) return;
    if (animationTimerRef.current !== null) window.clearTimeout(animationTimerRef.current);
    root.setAttribute("data-animating", "true");
    mapGrainRef.current?.setAttribute("data-animating", "true");
    // A little longer than the glide (--dur-move in map.css)
    animationTimerRef.current = window.setTimeout(stopAnimation, 760);
  }, [stopAnimation]);

  // Keep refs in sync with state
  useEffect(() => {
    zoomRef.current = zoom;
    panXRef.current = panX;
    panYRef.current = panY;
  }, [zoom, panX, panY]);

  useEffect(() => {
    highlightOnlyCodeRef.current = highlightOnlyCode;
    onClearHighlightOnlyRef.current = onClearHighlightOnly;
    onClearSelectionRef.current = onClearSelection;
  }, [highlightOnlyCode, onClearHighlightOnly, onClearSelection]);

  // Load the raw SVG text (only once)
  const [rawSvgText, setRawSvgText] = useState<string | null>(null);
  // Track when CSV country data is ready so we build map with correct score colors
  const [countriesReady, setCountriesReady] = useState(false);

  useEffect(() => {
    initializeCountries().then(() => setCountriesReady(true));
  }, []);

  useEffect(() => {
    let isMounted = true;

    fetch(withBasePath("/world_equal_earth_nautical.svg"))
      .then((res) => (res.ok ? res.text() : Promise.reject(res.statusText)))
      .then((text) => {
        if (isMounted) {
          // Remove the <style> tag completely and any fill attributes
          let cleanedText = text.replace(/<style[\s\S]*?<\/style>/gi, "");
          cleanedText = cleanedText.replace(/\s+fill="[^"]*"/gi, "");
          cleanedText = cleanedText.replace(/\s+fill='[^']*'/gi, "");
          setRawSvgText(cleanedText);
        }
      })
      .catch((error) => {
        console.error("Failed to load SVG:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []); // Only load once

  // Memoize processed SVG markup - recompute when rawSvgText or countries data is ready
  // Don't include the legend filter here to avoid rebuilding SVG (which resets zoom/pan)
  // Instead, update classes directly on existing paths via separate useEffect
  const svgMarkup = useMemo(() => {
    if (!rawSvgText || !countriesReady) return null;
    return buildSvgMarkupWithClasses(rawSvgText, null, []); // Don't include selectedCode or selectedLegendScore here
  }, [rawSvgText, countriesReady]);
  
  // Track the last SVG markup to prevent unnecessary innerHTML updates
  const lastSvgMarkupRef = useRef<string | null>(null);
  
  // Update innerHTML when svgMarkup changes (if container already exists)
  useEffect(() => {
    if (!svgMarkup || !containerRef.current) return;
    // Only update if markup actually changed
    if (svgMarkup !== lastSvgMarkupRef.current) {
      containerRef.current.innerHTML = svgMarkup;
      lastSvgMarkupRef.current = svgMarkup;
    }
  }, [svgMarkup]);

  // Update classes on existing paths when legend filter or highlight-only changes (without rebuilding SVG)
  // Also reorder paths so unfiltered countries render on top (higher z-index)
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const svg = root.querySelector("svg");
    if (!svg) return;

    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path[id]"));
    
    // Update classes
    paths.forEach((path) => {
      const rawId = path.id;
      if (!rawId) return;
      const code = rawId.toUpperCase();
      const className = getCountryClasses(code, selectedCode, selectedLegendScores, highlightOnlyCode, compareCodes);
      path.setAttribute("class", className);
    });

    // Reorder paths: filtered-out first (below), then unfiltered (on top)
    if (selectedLegendScores.length > 0 || highlightOnlyCode !== null) {
      const filteredOut: SVGPathElement[] = [];
      const unfiltered: SVGPathElement[] = [];
      
      paths.forEach((path) => {
        if (path.classList.contains("filtered-out")) {
          filteredOut.push(path);
        } else {
          unfiltered.push(path);
        }
      });

      // Remove all paths and re-append in correct order
      filteredOut.forEach((path) => svg.appendChild(path));
      unfiltered.forEach((path) => svg.appendChild(path));
    }

    // Selected countries go last so their outlines are not covered by neighbours
    paths.filter((path) => path.classList.contains("selected-country")).forEach((path) => svg.appendChild(path));
  }, [selectedLegendScores, highlightOnlyCode, selectedCode, compareCodes, svgMarkup]);


  // Capture SVG ref whenever markup changes (for zoom/pan transforms)
  // This needs to run AFTER React has inserted the innerHTML
  useEffect(() => {
    if (!svgMarkup) return;
    const root = containerRef.current;
    if (!root) return;
    
    // Use requestAnimationFrame to ensure DOM is updated after innerHTML update
    const rafId = requestAnimationFrame(() => {
      const svg = root.querySelector("svg");
      if (svg) {
        svgRef.current = svg;
        // Make SVG fluid: add viewBox from intrinsic size and set 100% width/height
        const w = parseFloat(svg.getAttribute("width") || "1000");
        const h = parseFloat(svg.getAttribute("height") || "452.41");
        if (w > 0 && h > 0 && !svg.getAttribute("viewBox")) {
          svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        }
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const base = (svg.getAttribute("viewBox") || "").split(/\s+/).map(Number);
        if (base.length === 4 && base[2] > 0 && base[3] > 0) {
          baseViewBoxRef.current = { width: base[2], height: base[3] };
        }
        bakedViewRef.current = { zoom: 1, panX: 0, panY: 0 };
        // Reset listeners flag so they can be re-attached if needed
        listenersAttachedRef.current = false;
      }
    });
    
    return () => cancelAnimationFrame(rafId);
  }, [svgMarkup]);

  // Use ref to track hovered country to avoid stale closure
  const hoveredCountryRef = useRef<string | null>(null);
  useEffect(() => {
    hoveredCountryRef.current = hoveredCountry;
  }, [hoveredCountry]);

  // Attach click / keyboard handlers once using event delegation.
  useEffect(() => {
    if (!svgMarkup) return;
    if (listenersAttachedRef.current) return;

    const root = containerRef.current;
    if (!root) return;
    const svg = root.querySelector("svg");
    if (!svg) return;

    let clickStartTime = 0;
    let clickStartPos = { x: 0, y: 0 };
    // A click acts at once. If it turns out to be the first half of a double-click (which only
    // zooms), the second click undoes what the first one opened or closed.
    let undoLastClick: { at: number; undo: () => void } | null = null;
    let pendingUndo: (() => void) | null = null;

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      stopAnimation();
      clickStartTime = Date.now();
      clickStartPos = { x: event.clientX, y: event.clientY };
      // Start panning everywhere (including on countries); click vs drag is decided in mouseup
      isPanningRef.current = true;
      lastPanPointRef.current = { x: event.clientX, y: event.clientY };
      event.preventDefault();
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isPanningRef.current) {
        // Dragging the map: the closed "grabbing" hand everywhere, also over countries, and the
        // flag-and-name label goes away until the mouse hovers again
        root.setAttribute("data-dragging", "true");
        root.removeAttribute("data-hovering");
        if (hoveredCountryRef.current !== null) setHoveredCountry(null);
        if (tooltipRef.current) tooltipRef.current.style.visibility = "hidden";
        const deltaX = event.clientX - lastPanPointRef.current.x;
        const deltaY = event.clientY - lastPanPointRef.current.y;
        // Limits are applied in the transform effect (getClampedPan)
        setPanX((prev) => prev + deltaX);
        setPanY((prev) => prev + deltaY);
        lastPanPointRef.current = { x: event.clientX, y: event.clientY };
        return;
      }

      // Ignore the mouse events a browser fires right after a touch
      if (Date.now() - lastTouchTimeRef.current < 1000) return;

      // Handle hover tooltip
      const target = event.target;
      const hoveredCode = getCountryCode(target);
      // The hand cursor is set once for the whole map while a country (or its tap area) is under
      // the mouse, instead of per shape, so it holds steady as the mouse crosses from an island
      // to the water around it
      root.toggleAttribute("data-hovering", hoveredCode !== null);
      if (hoveredCode) {
        const code = hoveredCode;
        const currentHovered = hoveredCountryRef.current;
        
        // Only update state if country changed (prevents unnecessary re-renders)
        if (currentHovered !== code) {
          setHoveredCountry(code);
        }
        
        // Update tooltip position directly via DOM (no re-render)
        if (tooltipRef.current) {
          tooltipRef.current.style.visibility = "visible";
          // Moved with a transform: unlike left/top it needs no new page layout on every mouse move
          tooltipRef.current.style.transform = `translate(${event.clientX + 10}px, ${event.clientY - 30}px)`;
        }
      } else {
        if (hoveredCountryRef.current !== null) {
          setHoveredCountry(null);
        }
        // Hide tooltip
        if (tooltipRef.current) {
          tooltipRef.current.style.visibility = "hidden";
        }
      }
    };

    const handleMouseLeave = () => {
      root.removeAttribute("data-hovering");
      if (!isPanningRef.current) root.removeAttribute("data-dragging");
      setHoveredCountry(null);
    };

    const handleMouseUp = (event: MouseEvent) => {
      isPanningRef.current = false;
      root.removeAttribute("data-dragging");

      // Check if this was a click (not a drag): short duration and little movement
      const clickDuration = Date.now() - clickStartTime;
      const clickDistance = Math.sqrt(
        Math.pow(event.clientX - clickStartPos.x, 2) +
        Math.pow(event.clientY - clickStartPos.y, 2)
      );
      // A slow, deliberate press still counts as a click; only movement makes it a drag
      const isClick = clickDuration < 600 && clickDistance < 5;

      if (isClick) {
        // Second click of a double-click: put back what the first click changed; the dblclick
        // handler does the zooming. The undo waits until the dblclick has been delivered:
        // reopening a country re-orders the map's shapes, and a shape that moves between the
        // press and the release gets no click or dblclick from the browser.
        if (event.detail >= 2) {
          if (undoLastClick && Date.now() - undoLastClick.at < 600) {
            const { undo } = undoLastClick;
            let done = false;
            pendingUndo = () => {
              if (done) return;
              done = true;
              pendingUndo = null;
              undo();
            };
            window.setTimeout(() => pendingUndo?.(), 100); // in case no dblclick follows
          }
          undoLastClick = null;
          return;
        }
        const target = event.target;
        const code = getCountryCode(target);
        const onMap = root.contains(target as Node);
        if (target instanceof SVGElement) target.blur();
        // Comparing: a country goes into the comparison or comes out of it; the sea does nothing
        if (compareCodesRef.current) {
          if (code) {
            onToggleCompareRef.current?.(code);
            undoLastClick = { at: Date.now(), undo: () => onToggleCompareRef.current?.(code) };
          }
          return;
        }
        const before = selectedCodeRef.current;
        const restore = () => (before ? onSelectCountry(before) : onClearSelectionRef.current?.());
        if (code) {
          if (code === before) {
            // Clicking the open country closes its details
            onClearHighlightOnlyRef.current?.();
            onClearSelectionRef.current?.();
          } else {
            // Any other country opens (page.tsx also drops the pin highlight)
            onSelectCountry(code);
          }
          undoLastClick = { at: Date.now(), undo: restore };
        } else if (onMap) {
          // Click on the sea: close the open country's details (no-op when none is open)
          onClearHighlightOnlyRef.current?.();
          onClearSelectionRef.current?.();
          undoLastClick = before ? { at: Date.now(), undo: restore } : null;
        }
      }
    };

    // Keyboard shortcuts for zoom: + and - zoom, 0 shows the whole world. They work wherever the
    // focus is on the page (the map rarely has it), except while typing in a field, and they leave
    // the browser's own Cmd/Ctrl shortcuts (page zoom) alone.
    const handleShortcutKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        if (!containerRef.current || !svgRef.current) return;
        const currentZoom = zoomRef.current;
        const currentPanX = panXRef.current;
        const currentPanY = panYRef.current;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const svgX = (centerX - currentPanX) / currentZoom;
        const svgY = (centerY - currentPanY) / currentZoom;
        const newZoom = Math.min(getMaxZoom(containerRef.current), currentZoom * ZOOM_STEP);
        const newPanX = centerX - svgX * newZoom;
        const newPanY = centerY - svgY * newZoom;
        startAnimation();
        setZoom(newZoom);
        setPanX(newPanX);
        setPanY(newPanY);
        return;
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        if (!containerRef.current || !svgRef.current) return;
        const currentZoom = zoomRef.current;
        const currentPanX = panXRef.current;
        const currentPanY = panYRef.current;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const svgX = (centerX - currentPanX) / currentZoom;
        const svgY = (centerY - currentPanY) / currentZoom;
        const newZoom = Math.max(1, currentZoom / ZOOM_STEP);
        const newPanX = centerX - svgX * newZoom;
        const newPanY = centerY - svgY * newZoom;
        startAnimation();
        setZoom(newZoom);
        setPanX(newPanX);
        setPanY(newPanY);
        return;
      }
      if (event.key === "0") {
        event.preventDefault();
        onClearHighlightOnlyRef.current?.();
        startAnimation();
        setZoom(1);
        setPanX(0);
        setPanY(0);
        return;
      }
    };

    // Enter/Space opens the country that has keyboard focus on the map
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (!(target instanceof SVGPathElement)) return;
      const rawId = target.id;
      if (!rawId) return;
      const code = rawId.toUpperCase();
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelectCountry(code);
      }
    };

    // Wheel input comes from three kinds of gesture:
    //  - trackpad pinch (browsers report it as a wheel event with ctrlKey) -> zoom
    //  - trackpad two-finger slide -> pan, like dragging
    //  - mouse wheel -> zoom
    // A mouse wheel moves in whole notches (wheelDelta in multiples of 120, no sideways part);
    // anything else is treated as a trackpad. The verdict is held for the length of a gesture
    // so a fast swipe that happens to hit a notch-sized value does not flip to zooming.
    let wheelKind: "mouse" | "trackpad" = "mouse";
    let lastWheelTime = 0;
    const classifyWheel = (event: WheelEvent): "mouse" | "trackpad" => {
      const now = performance.now();
      if (now - lastWheelTime > 400) {
        const wheelDeltaY = (event as WheelEvent & { wheelDeltaY?: number }).wheelDeltaY;
        if (event.deltaX !== 0) wheelKind = "trackpad";
        else if (typeof wheelDeltaY === "number" && wheelDeltaY !== 0) {
          wheelKind = Math.abs(wheelDeltaY) % 120 === 0 ? "mouse" : "trackpad";
        } else {
          // No wheelDelta (Firefox): mouse wheels report lines, trackpads report pixels
          wheelKind = event.deltaMode === 0 ? "trackpad" : "mouse";
        }
      }
      lastWheelTime = now;
      return wheelKind;
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      stopAnimation();
      
      if (!svgRef.current || !containerRef.current) {
        return;
      }

      const isPinch = event.ctrlKey;
      if (!isPinch && classifyWheel(event) === "trackpad") {
        // Two-finger slide: move the map with the fingers (limits are applied in getClampedPan)
        setPanX((prev) => prev - event.deltaX);
        setPanY((prev) => prev - event.deltaY);
        return;
      }
      
      const rect = containerRef.current.getBoundingClientRect();
      const currentZoom = zoomRef.current;
      const currentPanX = panXRef.current;
      const currentPanY = panYRef.current;
      
      // Get mouse position relative to container
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      // Calculate point in SVG coordinate system (before zoom/pan)
      const svgX = (mouseX - currentPanX) / currentZoom;
      const svgY = (mouseY - currentPanY) / currentZoom;
      
      // Pinch follows the fingers continuously; a mouse wheel zooms 5% per notch
      const zoomFactor = isPinch ? Math.exp(-event.deltaY * 0.01) : event.deltaY > 0 ? 0.95 : 1.05;
      const newZoom = Math.max(1, Math.min(getMaxZoom(containerRef.current), currentZoom * zoomFactor));
      
      // Adjust pan to keep the same SVG point under the mouse
      const newPanX = mouseX - svgX * newZoom;
      const newPanY = mouseY - svgY * newZoom;
      
      setZoom(newZoom);
      setPanX(newPanX);
      setPanY(newPanY);
    };
    wheelHandlerRef.current = handleWheel;

    const handleDoubleClick = (event: MouseEvent) => {
      event.preventDefault();
      // A double-click only ever zooms (never opens or closes anything; see undoLastClick):
      //  - on a country: zoom in on it, or back out to the whole world if it is already the one
      //    zoomed in on
      //  - on the sea: back out to the whole world
      pendingUndo?.();

      if (!containerRef.current || !svgRef.current) return;
      
      const currentZoom = zoomRef.current;
      const currentPanX = panXRef.current;
      const currentPanY = panYRef.current;
      
      const targetCode = getCountryCode(event.target);
      const target = targetCode ? getCountryPath(containerRef.current, targetCode) : null;
      if (target && targetCode) {
        // Double-click on a country that is already zoomed in and centred: zoom back out to the world
        const last = zoomedToRef.current;
        const stillThere =
          last !== null &&
          last.code === targetCode &&
          Math.abs(currentZoom - last.zoom) < last.zoom * 0.02 &&
          Math.abs(currentPanX - last.panX) < 4 &&
          Math.abs(currentPanY - last.panY) < 4;
        if (stillThere && currentZoom > 1) {
          zoomedToRef.current = null;
          startAnimation();
          setZoom(1);
          setPanX(0);
          setPanY(0);
          return;
        }
        // Otherwise zoom to it with the same centring as the panel's locate button
        zoomToPathRef.current?.(target);
      } else if (currentZoom > 1 || currentPanX !== 0 || currentPanY !== 0) {
        // Double-click on the sea: back out to the whole world
        zoomedToRef.current = null;
        startAnimation();
        setZoom(1);
        setPanX(0);
        setPanY(0);
      }
    };

    const getTouchDistance = (touch1: Touch, touch2: Touch): number => {
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const getTouchCenter = (touch1: Touch, touch2: Touch): { x: number; y: number } => {
      return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
      };
    };

    // Momentum after a one-finger drag: when the finger lifts while still moving, the map glides on
    // at the finger's speed and slows down, as a trackpad slide does (the browser gives trackpads
    // this on its own; for touch the app does it). Speed is measured over the last 100ms of the
    // drag; a finger that came to rest before lifting gives no glide.
    let panSamples: Array<{ x: number; y: number; t: number }> = [];
    let inertiaFrame: number | null = null;
    const stopInertia = () => {
      if (inertiaFrame !== null) cancelAnimationFrame(inertiaFrame);
      inertiaFrame = null;
    };
    const startInertia = () => {
      const now = performance.now();
      const recent = panSamples.filter((sample) => now - sample.t <= 100);
      panSamples = [];
      if (recent.length < 2 || now - recent[recent.length - 1].t > 50) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const first = recent[0];
      const last = recent[recent.length - 1];
      const span = Math.max(1, last.t - first.t);
      let vx = (last.x - first.x) / span; // px per ms
      let vy = (last.y - first.y) / span;
      if (Math.hypot(vx, vy) < 0.1) return;
      let previous = now;
      const step = (time: number) => {
        const dt = Math.min(32, time - previous);
        previous = time;
        const dx = vx * dt;
        const dy = vy * dt;
        setPanX((prev) => prev + dx);
        setPanY((prev) => prev + dy);
        // Friction close to iOS scrolling: the speed halves about every 230ms
        const friction = Math.pow(0.997, dt);
        vx *= friction;
        vy *= friction;
        inertiaFrame = Math.hypot(vx, vy) > 0.02 ? requestAnimationFrame(step) : null;
      };
      inertiaFrame = requestAnimationFrame(step);
    };

    const handleTouchStart = (event: TouchEvent) => {
      stopAnimation();
      stopInertia();
      panSamples = [];
      lastTouchTimeRef.current = Date.now();
      if (hoveredCountryRef.current !== null) setHoveredCountry(null);
      root.removeAttribute("data-hovering");
      if (tooltipRef.current) tooltipRef.current.style.visibility = "hidden";
      if (event.touches.length === 2) {
        // Two fingers: start combined pan + zoom
        event.preventDefault();
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        
        // Save initial distance for zoom calculation
        touchStartDistanceRef.current = getTouchDistance(touch1, touch2);
        
        // Save initial zoom and pan values
        touchStartZoomRef.current = zoomRef.current;
        touchStartPanRef.current = { x: panXRef.current, y: panYRef.current };
        
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const centerViewport = getTouchCenter(touch1, touch2);
          
          // Save center in viewport coordinates (for pan calculation)
          touchStartCenterViewportRef.current = {
            x: centerViewport.x,
            y: centerViewport.y,
          };
          
          // Save center in container coordinates (for zoom point calculation)
          touchStartCenterRef.current = {
            x: centerViewport.x - rect.left,
            y: centerViewport.y - rect.top,
          };
        }
        
        isPanningRef.current = true;
      } else if (event.touches.length === 1) {
        // Single touch: start panning
        const touch = event.touches[0];
        isPanningRef.current = true;
        lastPanPointRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2 && touchStartDistanceRef.current !== null) {
        // Two fingers: combined pan + zoom
        event.preventDefault();
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];
        
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        
        // Get current touch center (in viewport coordinates)
        const currentTouchCenterViewport = getTouchCenter(touch1, touch2);
        
        // Calculate pan delta: how much the touch center has moved (in viewport coordinates)
        const panDeltaX = currentTouchCenterViewport.x - touchStartCenterViewportRef.current.x;
        const panDeltaY = currentTouchCenterViewport.y - touchStartCenterViewportRef.current.y;
        
        // Calculate zoom: the map scales 1:1 with the distance between the fingers, as in other map apps
        const currentDistance = getTouchDistance(touch1, touch2);
        const zoomScale = currentDistance / touchStartDistanceRef.current;
        const newZoom = Math.max(1, Math.min(getMaxZoom(containerRef.current), touchStartZoomRef.current * zoomScale));
        
        // Zoom point is the CURRENT center between the two fingers (in container coordinates)
        const currentCenter = {
          x: currentTouchCenterViewport.x - rect.left,
          y: currentTouchCenterViewport.y - rect.top,
        };
        
        // Find the SVG point that was under the start touch center
        // This point should remain under the current touch center after zoom
        const startCenter = touchStartCenterRef.current;
        const svgX = (startCenter.x - touchStartPanRef.current.x) / touchStartZoomRef.current;
        const svgY = (startCenter.y - touchStartPanRef.current.y) / touchStartZoomRef.current;
        
        // Calculate new pan so that the SVG point stays under the current touch center after zoom
        // This automatically accounts for pan delta since currentCenter is where fingers are now
        const finalPanX = currentCenter.x - svgX * newZoom;
        const finalPanY = currentCenter.y - svgY * newZoom;
        
        setZoom(newZoom);
        setPanX(finalPanX);
        setPanY(finalPanY);
      } else if (event.touches.length === 1 && isPanningRef.current) {
        // Single touch pan
        event.preventDefault();
        const touch = event.touches[0];
        const deltaX = touch.clientX - lastPanPointRef.current.x;
        const deltaY = touch.clientY - lastPanPointRef.current.y;
        // Limits are applied in the transform effect (getClampedPan)
        setPanX((prev) => prev + deltaX);
        setPanY((prev) => prev + deltaY);
        lastPanPointRef.current = { x: touch.clientX, y: touch.clientY };
        panSamples.push({ x: touch.clientX, y: touch.clientY, t: performance.now() });
        if (panSamples.length > 20) panSamples.shift();
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      // The made-up mouse events arrive after the finger lifts, so restart the window here too
      lastTouchTimeRef.current = Date.now();
      if (event.touches.length < 2) {
        touchStartDistanceRef.current = null;
        // If going from two fingers to one, update lastPanPoint for single-touch pan
        if (event.touches.length === 1) {
          const touch = event.touches[0];
          lastPanPointRef.current = { x: touch.clientX, y: touch.clientY };
          panSamples = []; // the speed of a pinch is not a drag speed
        }
      }
      if (event.touches.length === 0) {
        isPanningRef.current = false;
        startInertia();
      }
    };

    root.addEventListener("mousedown", handleMouseDown);
    root.addEventListener("mousemove", handleMouseMove);
    root.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseup", handleMouseUp);
    root.addEventListener("wheel", handleWheel, { passive: false });
    root.addEventListener("dblclick", handleDoubleClick);
    root.addEventListener("touchstart", handleTouchStart, { passive: false });
    root.addEventListener("touchmove", handleTouchMove, { passive: false });
    root.addEventListener("touchend", handleTouchEnd);
    svg.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleShortcutKey);

    listenersAttachedRef.current = true;

    return () => {
      root.removeEventListener("mousedown", handleMouseDown);
      root.removeEventListener("mousemove", handleMouseMove);
      root.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      root.removeEventListener("wheel", handleWheel);
      root.removeEventListener("dblclick", handleDoubleClick);
      stopInertia();
      root.removeEventListener("touchstart", handleTouchStart);
      root.removeEventListener("touchmove", handleTouchMove);
      root.removeEventListener("touchend", handleTouchEnd);
      svg.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleShortcutKey);
      listenersAttachedRef.current = false;
    };
  }, [svgMarkup, onSelectCountry, startAnimation, stopAnimation]);

  // Clamp pan against the drawn map (the viewBox area inside the SVG box, which is letterboxed
  // when the box and map have different proportions): the middle of the visible view must stay
  // on the map. That keeps the map from being dragged away while letting any country be centred.
  const getClampedPan = useCallback(
    (w: number, h: number, z: number, px: number, py: number) => {
      // The country panel hides the right side of the map when docked, so the view is narrower
      const inset = containerRef.current ? getRightInset(containerRef.current) : 0;
      let contentX = 0, contentY = 0, contentW = w, contentH = h;
      const base = baseViewBoxRef.current;
      if (base) {
        const scale = Math.min(w / base.width, h / base.height);
        contentW = base.width * scale;
        contentH = base.height * scale;
        contentX = (w - contentW) / 2;
        contentY = (h - contentH) / 2;
      }
      const vertical = containerRef.current ? getVerticalInsets(containerRef.current) : { top: 0, bottom: 0 };
      const clampAxis = (pan: number, start: number, size: number, center: number) =>
        Math.max(center - (start + size) * z, Math.min(center - start * z, pan));
      return {
        panX: clampAxis(px, contentX, contentW, (w - inset) / 2),
        panY: clampAxis(py, contentY, contentH, vertical.top + (h - vertical.top - vertical.bottom) / 2),
      };
    },
    []
  );

  // Apply zoom and pan transforms (with clamping so map never leaves viewport)
  // Use SVG content box (clientWidth/clientHeight) as viewport so padding doesn't break centering
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Stroke width in CSS uses this so borders stay constant in screen pixels at any zoom
    root.style.setProperty("--map-zoom", String(zoom));

    const svg = root.querySelector<SVGSVGElement>("svg");
    if (!svg) return;

    svgRef.current = svg;

    const rootRect = root.getBoundingClientRect();
    const w = svg.clientWidth > 0 ? svg.clientWidth : rootRect.width;
    const h = svg.clientHeight > 0 ? svg.clientHeight : rootRect.height;
    const { panX: clampedPanX, panY: clampedPanY } = getClampedPan(w, h, zoom, panX, panY);

    // The grain is the map's surface: slide its texture by the same amount as the map
    if (mapGrainRef.current) {
      mapGrainRef.current.style.backgroundPosition = `${clampedPanX}px ${clampedPanY}px`;
    }

    // Express the current view relative to the baked one (see bakedViewRef)
    const baked = bakedViewRef.current;
    const k = zoom / baked.zoom;
    // How much the map is stretched as a picture on top of its drawn (baked) size. Country borders
    // have a fixed screen width that only accounts for the drawn size, so they divide by this to
    // stay that width while a zoom glides (map.css, --map-stretch)
    root.style.setProperty("--map-stretch", String(k));
    const tx = clampedPanX - k * baked.panX;
    const ty = clampedPanY - k * baked.panY;
    const prev = appliedViewRef.current;
    if (
      root.hasAttribute("data-animating") &&
      prev &&
      prev.baked === baked &&
      Math.abs(prev.k - k) > 1e-4
    ) {
      // A gliding zoom: interpolating the move and the scale separately makes the map swing out
      // and back on its way. Instead, zoom about the one point that stays put between the old
      // view and the new: with the transform origin there, only the scale changes during the
      // glide and everything travels in a straight line towards or away from it.
      const fx = (tx - prev.tx) / (prev.k - k);
      const fy = (ty - prev.ty) / (prev.k - k);
      const cx = prev.tx - fx * (1 - prev.k);
      const cy = prev.ty - fy * (1 - prev.k);
      // Same picture as now, re-expressed around that point (without a transition) ...
      svg.style.setProperty("transition", "none", "important");
      svg.style.setProperty("transform-origin", `${fx}px ${fy}px`, "important");
      svg.style.setProperty("transform", `translate(${cx}px, ${cy}px) scale(${prev.k})`, "important");
      void svg.getBoundingClientRect();
      // ... then glide the scale alone
      svg.style.removeProperty("transition");
      svg.style.setProperty("transform", `translate(${cx}px, ${cy}px) scale(${k})`, "important");
    } else {
      svg.style.setProperty("transform", `translate(${tx}px, ${ty}px) scale(${k})`, "important");
      svg.style.setProperty("transform-origin", "0 0", "important");
    }
    appliedViewRef.current = { tx, ty, k, baked };
    svg.style.setProperty("max-width", "none", "important");
    svg.style.setProperty("max-height", "none", "important");

    if (clampedPanX !== panX || clampedPanY !== panY) {
      setPanX(clampedPanX);
      setPanY(clampedPanY);
    }

    // Once the view has been still for a moment (and any glide has finished), bake it
    const bake = () => {
      bakeTimerRef.current = null;
      const base = baseViewBoxRef.current;
      if (!base || !svg.isConnected) return;
      if (root.hasAttribute("data-animating")) {
        bakeTimerRef.current = window.setTimeout(bake, 120);
        return;
      }
      const boxW = svg.clientWidth;
      const boxH = svg.clientHeight;
      if (boxW <= 0 || boxH <= 0) return;
      // Same mapping the transform used: screen = pan + zoom * (offset + mapUnit * scale)
      const scale = Math.min(boxW / base.width, boxH / base.height);
      const offsetX = (boxW - base.width * scale) / 2;
      const offsetY = (boxH - base.height * scale) / 2;
      const left = (-clampedPanX / zoom - offsetX) / scale;
      const top = (-clampedPanY / zoom - offsetY) / scale;
      svg.setAttribute("viewBox", `${left} ${top} ${boxW / (zoom * scale)} ${boxH / (zoom * scale)}`);
      bakedViewRef.current = { zoom, panX: clampedPanX, panY: clampedPanY };
      svg.style.setProperty("transform", "translate(0px, 0px) scale(1)", "important");
      svg.style.setProperty("transform-origin", "0 0", "important");
      root.style.setProperty("--map-stretch", "1");
      appliedViewRef.current = { tx: 0, ty: 0, k: 1, baked: bakedViewRef.current };
    };
    bakeNowRef.current = bake;
    if (bakeTimerRef.current !== null) window.clearTimeout(bakeTimerRef.current);
    const settled = Math.abs(k - 1) < 1e-6 && Math.abs(tx) < 0.01 && Math.abs(ty) < 0.01;
    if (!settled) bakeTimerRef.current = window.setTimeout(bake, 200);

  }, [zoom, panX, panY, getClampedPan]);

  // The baked viewBox is sized for the map's box, so redo it when the window size changes
  useEffect(() => {
    let timer: number | null = null;
    const handleResize = () => {
      if (timer !== null) window.clearTimeout(timer);
      timer = window.setTimeout(() => bakeNowRef.current?.(), 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timer !== null) window.clearTimeout(timer);
    };
  }, []);

  // Zoom and pan so a country's main landmass is centred in the visible part of the map
  // With keepZoom the country is only moved to the centre, at whatever zoom the map is at.
  const zoomToPath = useCallback(
    (path: SVGPathElement, keepZoom = false) => {
      const root = containerRef.current;
      const svg = root?.querySelector<SVGSVGElement>("svg");
      if (!root || !svg) return;
    const pathBounds = getMainLandBBox(path);
    // Use SVG content box as viewport (same as transform clamping) so centering matches visible area
    const viewportW = svg.clientWidth > 0 ? svg.clientWidth : root.getBoundingClientRect().width;
    const viewportH = svg.clientHeight > 0 ? svg.clientHeight : root.getBoundingClientRect().height;
    // Part of the viewport not covered by the docked country panel
    const visibleW = Math.max(viewportW - getRightInset(root), viewportW * 0.3);
    // ...and, on phones, not covered by the search bar or the peeking bottom sheet
    const vertical = getVerticalInsets(root);
    const visibleH = Math.max(viewportH - vertical.top - vertical.bottom, viewportH * 0.3);

    const pathCenterX = pathBounds.x + pathBounds.width / 2;
    const pathCenterY = pathBounds.y + pathBounds.height / 2;

    // The map's own viewBox maps to the viewport via scale + offset (xMidYMid meet). Path coords are in map units.
    const base = baseViewBoxRef.current;
    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (base) {
      scale = Math.min(viewportW / base.width, viewportH / base.height);
      offsetX = (viewportW - base.width * scale) / 2;
      offsetY = (viewportH - base.height * scale) / 2;
    }

    // Fit the country into the middle 60% of the visible area so it has room around it
    const fitZoom = Math.min(
      (visibleW * 0.6) / (pathBounds.width * scale),
      (visibleH * 0.6) / (pathBounds.height * scale)
    );
    const newZoom = keepZoom ? zoomRef.current : Math.min(getMaxZoom(root), Math.max(1, fitZoom));

    // Center the country in the visible area: viewBox (pathCenterX, pathCenterY) -> viewport = pan + (offset + pathCenter*scale)*zoom
    const rawPanX = visibleW / 2 - (offsetX + pathCenterX * scale) * newZoom;
    const rawPanY = vertical.top + visibleH / 2 - (offsetY + pathCenterY * scale) * newZoom;
    const { panX: newPanX, panY: newPanY } = getClampedPan(viewportW, viewportH, newZoom, rawPanX, rawPanY);

    // Only a fitted view counts as "zoomed to this country" (double-click then zooms back out,
    // and the arrows keep fitting the next one). A plain move at the current zoom does not.
    zoomedToRef.current = keepZoom
      ? null
      : { code: path.id.toUpperCase(), zoom: newZoom, panX: newPanX, panY: newPanY };
    startAnimation();
    setZoom(newZoom);
    setPanX(newPanX);
    setPanY(newPanY);
    },
    [getClampedPan, startAnimation]
  );
  useEffect(() => {
    zoomToPathRef.current = zoomToPath;
  }, [zoomToPath]);

  // Zoom and pan to show a specific country (e.g. from modal "Show on map")
  useEffect(() => {
    if (!zoomToCountryCode || !onZoomToCountryDone) return;

    const root = containerRef.current;
    if (!root) {
      onZoomToCountryDone();
      return;
    }

    const svg = root.querySelector<SVGSVGElement>("svg");
    if (!svg) {
      onZoomToCountryDone();
      return;
    }

    const codeLower = zoomToCountryCode.toLowerCase();
    const path = Array.from(svg.querySelectorAll<SVGPathElement>("path[id]")).find(
      (p) => p.id?.toLowerCase() === codeLower
    );
    if (!path) {
      onZoomToCountryDone();
      return;
    }

    // Run after layout so SVG content box (clientWidth/clientHeight) is correct
    const rafId = requestAnimationFrame(() => {
      zoomToPath(path);
      onZoomToCountryDone();
    });

    return () => cancelAnimationFrame(rafId);
  }, [zoomToCountryCode, onZoomToCountryDone, zoomToPath]);

  // Previous/next arrows: bring the newly selected country into view, in the same manner as the
  // one before it. If the map was fitted to that country (double-click, locate, search), fit the
  // new one too. If it was only selected, keep the current zoom and just centre the new one.
  useEffect(() => {
    if (!stepToCountryCode || !onStepToCountryDone) return;
    const root = containerRef.current;
    const svg = root?.querySelector<SVGSVGElement>("svg");
    const codeLower = stepToCountryCode.toLowerCase();
    const path = svg
      ? Array.from(svg.querySelectorAll<SVGPathElement>("path[id]")).find((p) => p.id.toLowerCase() === codeLower)
      : undefined;
    if (!path) {
      onStepToCountryDone();
      return;
    }
    const last = zoomedToRef.current;
    const wasFitted =
      last !== null &&
      Math.abs(zoomRef.current - last.zoom) < last.zoom * 0.02 &&
      Math.abs(panXRef.current - last.panX) < 4 &&
      Math.abs(panYRef.current - last.panY) < 4;
    // After layout, so the panel's size is known
    const rafId = requestAnimationFrame(() => {
      zoomToPath(path, !wasFitted);
      onStepToCountryDone();
    });
    return () => cancelAnimationFrame(rafId);
  }, [stepToCountryCode, onStepToCountryDone, zoomToPath]);

  const handleZoomIn = () => {
    if (!containerRef.current || !svgRef.current) {
      return;
    }
    
    const currentZoom = zoomRef.current;
    const currentPanX = panXRef.current;
    const currentPanY = panYRef.current;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const svgX = (centerX - currentPanX) / currentZoom;
    const svgY = (centerY - currentPanY) / currentZoom;
    
    const newZoom = Math.min(getMaxZoom(containerRef.current), currentZoom * ZOOM_STEP);
    const newPanX = centerX - svgX * newZoom;
    const newPanY = centerY - svgY * newZoom;
    
    
    startAnimation();
    setZoom(newZoom);
    setPanX(newPanX);
    setPanY(newPanY);
  };

  const handleZoomOut = () => {
    if (!containerRef.current || !svgRef.current) return;
    
    const currentZoom = zoomRef.current;
    const currentPanX = panXRef.current;
    const currentPanY = panYRef.current;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const svgX = (centerX - currentPanX) / currentZoom;
    const svgY = (centerY - currentPanY) / currentZoom;
    
    const newZoom = Math.max(1, currentZoom / ZOOM_STEP);
    const newPanX = centerX - svgX * newZoom;
    const newPanY = centerY - svgY * newZoom;
    
    startAnimation();
    setZoom(newZoom);
    setPanX(newPanX);
    setPanY(newPanY);
  };

  const handleReset = () => {
    // Back to the whole world also ends the "only this country" highlight left by the locate button
    onClearHighlightOnly?.();
    startAnimation();
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  const hoveredCountryData = hoveredCountry ? getCountry(hoveredCountry) : null;
  const isDefaultView = zoom === 1 && panX === 0 && panY === 0 && highlightOnlyCode === null;

  // Load countries for search
  const [allCountries, setAllCountries] = useState<Array<{ code: string; name: string; score: number; scoreLabel: string }>>([]);
  
  useEffect(() => {
    initializeCountries().then(() => {
      const countries = getAllCountriesArray();
      setAllCountries(
        countries.map((c) => ({
          code: c.code,
          name: formatCountryName(c.name),
          score: c.hasData ? c.score : 0,
          scoreLabel: c.hasData ? formatScore(c) : "No data",
        }))
      );
      
      // Compute top 5 countries by rankGlobal
      const sortedByRank = countries
        .filter((c) => c.rankGlobal !== null)
        .sort((a, b) => (a.rankGlobal ?? Infinity) - (b.rankGlobal ?? Infinity))
        .slice(0, 5)
        .map((c) => ({
          code: c.code,
          name: formatCountryName(c.name),
          rank: c.rankGlobal ?? 0,
          score: c.score,
          scoreLabel: formatScore(c),
        }));
      setTopCountries(sortedByRank);
    });
  }, []);

  // Filter countries based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSelectedSearchIndex(-1);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = allCountries
      .filter((country) => {
        const nameLower = country.name.toLowerCase();
        const codeLower = country.code.toLowerCase();
        return nameLower.includes(query) || codeLower.includes(query);
      })
      .slice(0, 10); // Limit to 10 results

    setSearchResults(filtered);
    setSelectedSearchIndex(-1);
  }, [searchQuery, allCountries]);

  // Handle search selection: open the country and centre it on the map, like a double-click.
  // Also used by the top-5 list and the first-place card.
  const handleSelectCountry = useCallback((code: string) => {
    onSelectCountry(code, true);
    setSearchQuery("");
    setSearchResults([]);
    setSelectedSearchIndex(-1);
    searchInputRef.current?.blur();
    const path = Array.from(
      containerRef.current?.querySelectorAll<SVGPathElement>("svg path[id]") ?? []
    ).find((p) => p.id.toUpperCase() === code.toUpperCase());
    // Wait a frame so the details panel is laid out and its width is known
    if (path) requestAnimationFrame(() => zoomToPathRef.current?.(path));
  }, [onSelectCountry]);

  // Handle keyboard navigation in search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (searchResults.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedSearchIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedSearchIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (event.key === "Enter" && selectedSearchIndex >= 0) {
        event.preventDefault();
        handleSelectCountry(searchResults[selectedSearchIndex].code);
      } else if (event.key === "Escape") {
        setSearchQuery("");
        setSearchResults([]);
        setSelectedSearchIndex(-1);
        searchInputRef.current?.blur();
      }
    };

    if (searchInputRef.current && document.activeElement === searchInputRef.current) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [searchResults, selectedSearchIndex, handleSelectCountry]);

  // Prevent wheel events on legend from scrolling page - let map handle zoom instead
  const legendRef = useRef<HTMLDivElement | null>(null);
  const topCountriesLegendRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const legend = legendRef.current;
    if (!legend || !legendOpen) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent page scroll and let the map treat it like a gesture over the map itself
      e.preventDefault();
      e.stopPropagation();
      wheelHandlerRef.current?.(e);
    };

    legend.addEventListener("wheel", handleWheel, { passive: false });
    return () => legend.removeEventListener("wheel", handleWheel);
  }, [legendOpen]);

  useEffect(() => {
    const legend = topCountriesLegendRef.current;
    if (!legend || !topCountriesLegendOpen) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent page scroll and let the map treat it like a gesture over the map itself
      e.preventDefault();
      e.stopPropagation();
      wheelHandlerRef.current?.(e);
    };

    legend.addEventListener("wheel", handleWheel, { passive: false });
    return () => legend.removeEventListener("wheel", handleWheel);
  }, [topCountriesLegendOpen]);

  // Shared look of the round-cornered buttons in the right-hand column
  const controlButtonClass =
    "ui-grain flex h-10 w-10 items-center justify-center bg-white/90 hover:bg-white border border-zinc-200/80 rounded-lg shadow-sm dark:bg-zinc-900 dark:border-zinc-700/55 dark:hover:bg-zinc-800 transition-colors cursor-pointer";

  // Feedback: the visitor's email app opens with a subject and the page details filled in, so a
  // bug report says where it happened. The link is built at the moment of the click.
  const prepareFeedbackLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const open = selectedCode ? getCountry(selectedCode).name : null;
    const body = [
      "Hi,",
      "",
      "(Write your feedback here, or describe what went wrong and what you expected.)",
      "",
      "",
      "---",
      `Page: ${window.location.href}`,
      open ? `Country open: ${open}` : null,
      `Screen: ${window.innerWidth} × ${window.innerHeight}`,
      `Browser: ${navigator.userAgent}`,
    ]
      .filter((line) => line !== null)
      .join("\n");
    event.currentTarget.href = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
      "Bitcoin Friendliness Map: feedback"
    )}&body=${encodeURIComponent(body)}`;
  };
  const feedbackIcon = (
    <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8a2.5 2.5 0 01-2.5 2.5H10l-4.5 3.5V17h0A1.5 1.5 0 014 15.5z" />
      {/* Exclamation mark, centred in the bubble: "tell us / report a problem" rather than "chat" */}
      <path strokeLinecap="round" d="M12 7v4" />
      <circle cx="12" cy="13.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );

  // The feedback button of the bottom row (from sm up): icon and word, or the bare icon when the
  // row is narrow
  const renderFeedbackButton = () => (
    <a
      href={`mailto:${FEEDBACK_EMAIL}`}
      onClick={prepareFeedbackLink}
      className="ui-grain flex h-10 items-center gap-2 rounded-lg border border-zinc-200/80 bg-white/90 pl-2 pr-3 text-base text-zinc-900 shadow-sm transition-colors hover:bg-white dark:border-zinc-700/55 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 @max-[41rem]:w-10 @max-[41rem]:justify-center @max-[41rem]:px-0"
      aria-label="Send feedback or report a bug"
      title="Feedback"
    >
      {feedbackIcon}
      <span className="@max-[41rem]:sr-only">Feedback</span>
    </a>
  );

  // The buttons in the right-hand column: zoom in, zoom out (for anyone whose scrolling or pinching
  // does not zoom), whole world, compare, "how it works", and on phones feedback at the bottom
  const renderControlButtons = (withFeedback: boolean) => (
    <>
        <button
          onClick={handleZoomIn}
          className={controlButtonClass}
          aria-label="Zoom in (or press +)"
          title="Zoom in"
        >
          <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className={controlButtonClass}
          aria-label="Zoom out (or press -)"
          title="Zoom out"
        >
          <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        </button>
        <button
          onClick={handleReset}
          disabled={isDefaultView}
          className="ui-grain flex h-10 w-10 items-center justify-center bg-white/90 hover:bg-white border border-zinc-200/80 rounded-lg shadow-sm dark:bg-zinc-900 dark:border-zinc-700/55 dark:hover:bg-zinc-800 transition-[background-color,opacity] cursor-pointer disabled:cursor-default disabled:opacity-40"
          aria-label="Show the whole world (or press 0)"
          title="Show the whole world"
        >
          {/* Globe: "back to the whole world" (circular arrows read as reload) */}
          <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
          </svg>
        </button>
        <button
          onClick={onOpenCompare}
          className={`${controlButtonClass} ${compareOpen ? "ring-2 ring-zinc-400 dark:ring-zinc-500" : ""}`}
          aria-label="Compare countries"
          aria-pressed={compareOpen}
          title="Compare countries"
        >
          {/* Bars of different heights: scores side by side */}
          <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <rect x="4" y="10" width="4" height="10" rx="1" />
            <rect x="10" y="4" width="4" height="16" rx="1" />
            <rect x="16" y="13" width="4" height="7" rx="1" />
          </svg>
        </button>
        <button
          onClick={onOpenInfo}
          className={`${controlButtonClass} ${infoOpen ? "ring-2 ring-zinc-400 dark:ring-zinc-500" : ""}`}
          aria-label="How the map works and how it was scored"
          aria-pressed={infoOpen}
          title="How it works"
        >
          {/* "i" in a circle */}
          <svg className="h-6 w-6 text-zinc-700 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 11v5.5" />
            <circle cx="12" cy="7.75" r="0.6" fill="currentColor" />
          </svg>
        </button>
        {/* On phones the feedback button joins this column (the legends fill the bottom edge) */}
        {withFeedback && (
          <a
            href={`mailto:${FEEDBACK_EMAIL}`}
            onClick={prepareFeedbackLink}
            className={`${controlButtonClass} sm:hidden`}
            aria-label="Send feedback or report a bug"
            title="Feedback"
          >
            {feedbackIcon}
          </a>
        )}
    </>
  );

  return (
    <>
      {/* Search bar, with the first-place card beside it where there is room and under it where
          there is not. The row stops short of the zoom buttons (and, with a country open on wide
          screens, of the docked buttons left of the details panel). */}
      <div
        data-map-search
        className={`absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none sm:right-[4.5rem] ${
          docked ? "dock:right-[calc(var(--panel-w)+4.5rem)]" : ""
        }`}
      >
        {/* The row itself lets taps through (on phones it spans the width and would cover the
            button column under the search bar); only the search field and the card take them */}
        <div className="ui-grain pointer-events-auto relative w-full rounded-lg sm:w-[38ch] sm:max-w-full">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search countries..."
            className={`w-full rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-white/95 dark:bg-zinc-900/95 px-4 py-[7px] text-base shadow-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 ${
              searchQuery ? "pr-[4.5rem]" : "pr-10"
            }`}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                searchInputRef.current?.focus();
              }}
              className="absolute right-9 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-zinc-300/60 dark:bg-zinc-600/60 hover:bg-zinc-400/80 dark:hover:bg-zinc-500/80 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <svg
                className="h-3 w-3 text-zinc-600 dark:text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <svg
            className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div
              ref={searchResultsRef}
              className="absolute top-full mt-1 w-full max-h-60 overflow-y-auto rounded-lg border border-zinc-200/80 dark:border-zinc-700/55 bg-white/95 dark:bg-zinc-900/95 shadow-lg backdrop-blur z-30 search-results-enter stagger-children"
            >
              {searchResults.map((country, index) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleSelectCountry(country.code)}
                  className={`w-full px-4 py-2 text-left text-base hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-start gap-2 cursor-pointer ${
                    index === selectedSearchIndex
                      ? "bg-zinc-100 dark:bg-zinc-800"
                      : ""
                  }`}
                >
                  {/* Flag */}
                  <div className="h-4 w-6 shrink-0 flex items-center justify-center rounded border border-zinc-200/80 dark:border-zinc-700/55 overflow-hidden bg-zinc-100 dark:bg-zinc-800 mt-1">
                    <img
                      src={getFlagUrl(country.code, "w40")}
                      alt={getFlagAltText(country.name)}
                      className="h-4 w-auto object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-zinc-900 dark:text-white">
                      {country.name}
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {country.code}
                    </div>
                  </div>
                  <ScoreChip score={country.score} label={country.scoreLabel} />
                </button>
              ))}
            </div>
          )}
        </div>

        {topCountries[0] && (
          // A first click opens the leader and zooms to it; clicking again while its details are
          // open closes them and goes back to the whole world
          <FirstPlaceCard
            name={topCountries[0].name}
            isOpen={selectedCode === topCountries[0].code}
            onOpen={() => {
              if (selectedCode === topCountries[0].code) {
                onClearSelection?.();
                handleReset();
              } else {
                handleSelectCountry(topCountries[0].code);
              }
            }}
          />
        )}
      </div>

      <div
        ref={containerRef}
        className={`map-container relative min-h-0 w-full flex-1 ${
          selectedLegendScores.length > 0 ? "legend-filter-active" : ""
        }`}
      />

      {/* Map grain: moves with the map (its position is set where the map's transform is applied) */}
      <div ref={mapGrainRef} className="map-grain" aria-hidden="true" />
      
      {/* Zoom controls - positioned below search bar on mobile when search bar is full width */}
      {/* On small screens the country sheet slides up over the controls (it reaches to just under the
          search bar), so they stay put underneath it.
          On wide screens the country panel docks to the right edge and the controls sit on its left side.
          They are re-mounted on dock/undock so they arrive with the panel's own slide-in
          (same distance, duration and easing) instead of travelling across the map behind it.
          On closing they slide in from the left to the window edge while a copy leaves with the
          panel's slide-out. */}
      {/* On phones the buttons sit under the search bar, 0.5rem below it like the first-place card
          (1rem from the top + 2.5rem search bar + 0.5rem); from sm up they line up with the bar */}
      <div
        key={docked ? "docked" : "free"}
        className={`absolute top-16 right-4 flex flex-col gap-2 z-10 sm:top-4 ${
          docked
            ? "dock:right-[calc(var(--panel-w)+1rem)] map-controls-docked"
            : hasDocked
              ? "map-controls-free"
              : "map-controls-load"
        }`}
      >
        {renderControlButtons(true)}
      </div>
      {/* While the panel slides out, a copy of the buttons leaves with it from their docked place
          (wide screens only), as the real ones slide in to the window edge from the left */}
      {panelClosing && (
        <div
          aria-hidden="true"
          inert
          className="absolute top-4 right-[calc(var(--panel-w)+1rem)] z-10 hidden flex-col gap-2 dock:flex map-controls-exit"
        >
          {renderControlButtons(false)}
        </div>
      )}


      {/* Legends share one bottom row while both fit. Each is never narrower than its own content
          (min-w-max): a folded legend its title, arrow and padding, an open one its widest line.
          On phones they start from equal halves and grow from there (flex 1 1 0%), so an open
          legend takes the width its list needs and the folded one beside it gives way down to
          its own minimum; only when the two minimums together don't fit do they stack. The open
          top-5 list is the exception: its minimum is 192px and long names are cut short with an
          ellipsis instead, so it can stay beside the other legend. From sm up each is 256px. */}
      {/* The bottom row: the legends on the left, the feedback button on the right (from sm up; on
          phones it sits in the button column). The legends wrap onto a second line when the row
          is too narrow for both, and the feedback button drops its word when the row is narrow
          (a container query on the row, not the screen), so nothing ever overlaps. */}
      <div
        className={`@container absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-end gap-2 pointer-events-none ${
          docked ? "dock:right-[calc(var(--panel-w)+1rem)]" : ""
        }`}
      >
      <div
        data-map-legends
        className="flex flex-1 flex-wrap items-end gap-2 pointer-events-none"
      >
      {/* Legend overlay - minimized or expanded */}
      {legendOpen ? (
        <div
          ref={legendRef}
          className="relative ui-grain pointer-events-auto min-w-max flex-[1_1_0%] sm:flex-none sm:w-[256px] rounded-lg border border-zinc-200/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur dark:border-zinc-700/55 dark:bg-zinc-900/95 legend-expanding"
          role="region"
          aria-label="Score legend"
        >
          {/* With a score filter on, a "Clear" text button sits just above the score legend's right
              edge (open or folded), so the filter can be removed without opening the legend. Placed from
              the legend's outer edge (past its 1px border): 8px above it, flush right */}
          {selectedLegendScores.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLegendScores([]);
              }}
              onKeyDown={(e) => e.stopPropagation()}
              className="absolute bottom-full -right-px mb-[9px] flex items-center gap-1 rounded px-3 text-sm font-normal text-white underline-offset-4 [text-shadow:0_1px_3px_rgba(0,8,20,0.9)] hover:underline focus-visible:underline focus:outline-none cursor-pointer"
              aria-label="Clear the score filter"
            >
              Clear
            </button>
          )}
          <div
            className="mb-2 flex items-start justify-between gap-2 border-b border-zinc-200/80 pb-1 dark:border-zinc-700/55 cursor-pointer legend-content-slide"
            onClick={() => {
              setLegendOpen(false); // the filter stays on; "Clear filter" above the legend removes it
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLegendOpen(false);
              }
            }}
            aria-label="Minimize legend"
          >
            <span className="font-chart-legend min-w-0 truncate whitespace-nowrap text-[1.125rem] leading-6 tracking-[0.02em] text-zinc-700 dark:text-white">
              Filter by Scores
            </span>
            <div className="shrink-0 text-zinc-500 dark:text-zinc-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
          <ul className="space-y-1 text-base legend-content-slide stagger-children">
            {legendEntries.map((entry) => (
              <li
                key={entry.score}
                className={`flex items-center gap-2 cursor-pointer rounded px-1 py-1 transition-colors duration-150 ${
                  selectedLegendScores.includes(entry.score)
                    ? "bg-zinc-200 dark:bg-zinc-700 ring-2 ring-zinc-400 dark:ring-zinc-500 ring-inset"
                    : "bg-transparent ring-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:ring-1 hover:ring-zinc-300 dark:hover:ring-zinc-600 focus:outline-none focus:ring-0"
                }`}
                onClick={(e) => {
                  // Toggle this score in the filter; several scores can be active at once
                  toggleLegendScore(entry.score);
                  // Remove focus immediately after click to prevent focus ring from showing
                  // (currentTarget is cleared once the handler returns, so keep a reference)
                  const el = e.currentTarget as HTMLElement;
                  setTimeout(() => el.blur(), 0);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleLegendScore(entry.score);
                  }
                }}
                aria-label={
                  selectedLegendScores.includes(entry.score)
                    ? `Remove filter for score ${entry.score}`
                    : `Filter to countries with score ${entry.score}`
                }
                aria-pressed={selectedLegendScores.includes(entry.score)}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full ring-1 ring-black/20 dark:ring-0"
                  style={{ backgroundColor: `var(--score-${entry.score})` }}
                  aria-hidden="true"
                />
                <span className="font-medium text-zinc-800 dark:text-zinc-200">
                  {entry.score}: {entry.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className="relative ui-grain pointer-events-auto min-w-max flex-[1_1_0%] sm:flex-none sm:w-[256px] rounded-lg border border-zinc-200/80 bg-white/95 px-3 py-[7px] shadow-lg backdrop-blur dark:border-zinc-700/55 dark:bg-zinc-900/95 cursor-pointer hover:bg-white dark:hover:bg-zinc-900 legend-expanding"
          onClick={() => setLegendOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLegendOpen(true);
            }
          }}
          aria-label="Open legend"
        >
          {/* With a score filter on, a "Clear" text button sits just above the score legend's right
              edge (open or folded), so the filter can be removed without opening the legend. Placed from
              the legend's outer edge (past its 1px border): 8px above it, flush right */}
          {selectedLegendScores.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLegendScores([]);
              }}
              onKeyDown={(e) => e.stopPropagation()}
              className="absolute bottom-full -right-px mb-[9px] flex items-center gap-1 rounded px-3 text-sm font-normal text-white underline-offset-4 [text-shadow:0_1px_3px_rgba(0,8,20,0.9)] hover:underline focus-visible:underline focus:outline-none cursor-pointer"
              aria-label="Clear the score filter"
            >
              Clear
            </button>
          )}
          <div className="flex items-center justify-between gap-1">
            <span className="font-chart-legend min-w-0 truncate whitespace-nowrap text-[1.125rem] leading-6 tracking-[0.02em] text-zinc-900 dark:text-white translate-y-[1.75px]">
              Filter by Scores
            </span>
            <svg className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        </div>
      )}

      {/* Top Countries Legend - minimized or expanded */}
      {topCountriesLegendOpen ? (
        <div
          ref={topCountriesLegendRef}
          className="ui-grain pointer-events-auto min-w-[192px] flex-[1_1_0%] sm:flex-none sm:w-[256px] rounded-lg border border-zinc-200/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur dark:border-zinc-700/55 dark:bg-zinc-900/95 legend-expanding"
          role="region"
          aria-label="Top countries legend"
        >
          <div
            className="mb-2 flex items-start justify-between gap-2 border-b border-zinc-200/80 pb-1 dark:border-zinc-700/55 cursor-pointer legend-content-slide"
            onClick={() => {
              setTopCountriesLegendOpen(false);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setTopCountriesLegendOpen(false);
              }
            }}
            aria-label="Minimize top countries legend"
          >
            <div className="flex flex-col">
              <span className="font-chart-legend min-w-0 truncate whitespace-nowrap text-[1.125rem] leading-6 tracking-[0.02em] text-zinc-700 dark:text-white">
                Top 5 Countries
              </span>
            </div>
            <div className="shrink-0 text-zinc-500 dark:text-zinc-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
          <ul className="space-y-1 text-base legend-content-slide stagger-children">
            {/* Like a search result: opens the country and centres it on the map */}
            {topCountries.map((country) => (
              <li
                key={country.code}
                className="flex items-center gap-2 cursor-pointer rounded px-1 py-1 transition-colors duration-150 bg-transparent ring-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-0"
                onClick={(e) => {
                  handleSelectCountry(country.code);
                  const el = e.currentTarget as HTMLElement;
                  setTimeout(() => el.blur(), 0);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectCountry(country.code);
                  }
                }}
                aria-label={`Open ${country.name} details`}
              >
                {/* Long names are cut short with an ellipsis where the legend runs out of room (the
                    full name shows on hover and is in the row's label for screen readers) */}
                <span className="min-w-0 truncate font-medium text-zinc-800 dark:text-zinc-200" title={country.name}>
                  {country.rank}. {country.name}
                </span>
                <ScoreChip score={country.score} label={country.scoreLabel} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className="ui-grain pointer-events-auto min-w-max flex-[1_1_0%] sm:flex-none sm:w-[256px] rounded-lg border border-zinc-200/80 bg-white/95 px-3 py-[7px] shadow-lg backdrop-blur dark:border-zinc-700/55 dark:bg-zinc-900/95 cursor-pointer hover:bg-white dark:hover:bg-zinc-900 legend-expanding"
          onClick={() => setTopCountriesLegendOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setTopCountriesLegendOpen(true);
            }
          }}
          aria-label="Open top countries legend"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="font-chart-legend min-w-0 truncate whitespace-nowrap text-[1.125rem] leading-6 tracking-[0.02em] text-zinc-900 dark:text-white translate-y-[1.75px]">
              Top 5 Countries
            </span>
            <svg className="h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        </div>
      )}

      </div>

      {/* Feedback and bug reports. It moves with the docked panel exactly like the button column:
          re-mounted on dock/undock, it slides in with the panel, and on closing a copy leaves with
          the panel's slide-out while the real one slides in to the window edge.
          (When even the bare icon has no room beside the legends it takes its own line, on the right) */}
      <div
        key={docked ? "feedback-docked" : "feedback-free"}
        className={`ml-auto hidden shrink-0 pointer-events-auto sm:block ${
          docked ? "map-controls-docked" : hasDocked ? "map-controls-free" : "map-controls-load"
        }`}
      >
        {renderFeedbackButton()}
      </div>
      </div>
      {/* The leaving copy, in a row of the same width as the docked one, so the container query
          gives it the same look (word or bare icon) */}
      {panelClosing && (
        <div
          aria-hidden="true"
          inert
          className="@container absolute bottom-4 left-4 right-[calc(var(--panel-w)+1rem)] z-10 hidden justify-end pointer-events-none dock:flex"
        >
          <div className="map-controls-exit">{renderFeedbackButton()}</div>
        </div>
      )}

      {/* Tooltip */}
      {hoveredCountryData && (
        <div
          ref={tooltipRef}
          className="map-tooltip fixed left-0 top-0 pointer-events-none z-50 bg-black/80 text-white text-base px-2 py-1 rounded shadow-lg"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: 8,
            minWidth: "max-content",
            visibility: "hidden",
          }}
        >
          <img
            src={getFlagUrl(hoveredCountryData.code, "w40")}
            alt={getFlagAltText(hoveredCountryData.name)}
            style={{ width: 16, height: 12, objectFit: "cover", borderRadius: 2, flexShrink: 0, display: "block" }}
          />
          <span style={{ flexShrink: 0, whiteSpace: "nowrap" }}>{formatCountryName(hoveredCountryData.name)}</span>
          {/* Its band and score, with the band's colour */}
          <span style={{ flexShrink: 0, whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 8 }} className="text-zinc-300">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                flexShrink: 0,
                background: hoveredCountryData.hasData ? `var(--score-${hoveredCountryData.score})` : "var(--no-data)",
              }}
            />
            {hoveredCountryData.hasData
              ? `${legendEntries.find((e) => e.score === hoveredCountryData.score)?.label ?? ""} · ${formatScore(hoveredCountryData)}`
              : "No data"}
          </span>
        </div>
      )}
    </>
  );
};

export default WorldMap;
