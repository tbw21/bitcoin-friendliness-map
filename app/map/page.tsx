"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { initializeCountries, getAllCountries } from "@/data/countriesCsv";
import WorldMap from "./WorldMap";
import Modal from "./Modal";
import ComparePanel, { MAX_COMPARE } from "./ComparePanel";
import InfoPanel from "./InfoPanel";
import SiteNavbar from "./SiteNavbar";
import ButtonTooltips from "./ButtonTooltips";
import { paletteVars } from "@/data/palettes";

// Film grain: fine specks in many colours, drawn as their own dots laid straight on top (no
// blending), so the grain looks the same on dark and light areas. The map and the interface each
// have their own layer (.map-grain and .ui-grain in map.css): the map's is part of the map and
// moves with it; the interface's sits on the panels and controls.
const GRAIN_STRENGTH = 0.04;
const GRAIN_IMAGE = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g' color-interpolation-filters='sRGB'>" +
    "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch'/>" +
    "<feColorMatrix values='4 0 0 0 -1.5  0 4 0 0 -1.5  0 0 4 0 -1.5  2 2 2 0 -2.7'/>" +
    "</filter><rect width='240' height='240' filter='url(#g)'/></svg>"
)}")`;

export default function MapPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [zoomToCountryCode, setZoomToCountryCode] = useState<string | null>(null);
  const [stepToCountryCode, setStepToCountryCode] = useState<string | null>(null);
  const [highlightOnlyCode, setHighlightOnlyCode] = useState<string | null>(null);
  // Phone bottom sheet: "full" covers the map; "peek" leaves the top two thirds of the screen free
  // so the country can be seen on the map with its details still within reach.
  const [sheetState, setSheetState] = useState<"full" | "peek">("full");
  // The compare and "how it works" panels take the same place as the country details; only one
  // of the three is open at a time
  const [toolPanel, setToolPanel] = useState<"compare" | "info" | null>(null);
  const toolPanelRef = useRef(toolPanel);
  useEffect(() => {
    toolPanelRef.current = toolPanel;
  }, [toolPanel]);
  // Countries in the comparison, in column order. Kept when the panel closes, so reopening it
  // brings the same comparison back.
  const [compareCodes, setCompareCodes] = useState<string[]>([]);

  // Deep links, once the data has loaded: ?country=XX opens that country, ?compare=XX,YY opens
  // the comparison
  const urlSyncReadyRef = useRef(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("country")?.toUpperCase();
    const compare = params.get("compare");
    if ((!code || !/^[A-Z]{2}$/.test(code)) && compare === null) {
      urlSyncReadyRef.current = true;
      return;
    }
    initializeCountries().then(() => {
      const known = getAllCountries();
      if (compare !== null) {
        const codes = compare.toUpperCase().split(",").filter((c, i, all) => known[c] && all.indexOf(c) === i);
        setCompareCodes(codes.slice(0, MAX_COMPARE));
        setToolPanel("compare");
      } else if (code && known[code]) setSelectedCode(code);
      urlSyncReadyRef.current = true;
    });
  }, []);

  // Keep the address in step with what is open so the view can be shared or bookmarked
  useEffect(() => {
    if (!urlSyncReadyRef.current) return;
    const url = new URL(window.location.href);
    if (selectedCode) url.searchParams.set("country", selectedCode);
    else url.searchParams.delete("country");
    if (toolPanel === "compare") url.searchParams.set("compare", compareCodes.join(","));
    else url.searchParams.delete("compare");
    window.history.replaceState(null, "", url.toString().replace(/%2C/g, ","));
  }, [selectedCode, toolPanel, compareCodes]);

  // Closing clears the selection at once, so the map and the search bar move straight back to
  // their full-width places, while the panel stays on screen just long enough to slide back out
  // to the right / the sheet to drop away (map.css .country-panel-exit); the docked zoom buttons
  // slide out with it (panelClosing) and then fade in at the window edge.
  // Choosing a country meanwhile cancels the exit.
  const [exitingCode, setExitingCode] = useState<string | null>(null);
  const [exitingTool, setExitingTool] = useState<"compare" | "info" | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const cancelClosing = () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
    setExitingCode(null);
    setExitingTool(null);
  };
  const exitDuration = () => (window.matchMedia("(min-width: 40rem)").matches ? 160 : 240); // --dur-exit(-sheet) in map.css
  const closeToolPanel = useCallback(() => {
    const panel = toolPanelRef.current;
    if (!panel) return;
    cancelClosing();
    setToolPanel(null);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setExitingTool(panel);
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setExitingTool(null);
    }, exitDuration());
  }, []);
  // The column buttons open their panel, or close it when it is already open. An open country
  // goes into the comparison when Compare is opened.
  const openToolPanel = (panel: "compare" | "info") => {
    if (toolPanel === panel) {
      closeToolPanel();
      return;
    }
    cancelClosing();
    if (panel === "compare" && selectedCode) {
      const code = selectedCode;
      setCompareCodes((prev) => (prev.includes(code) || prev.length >= MAX_COMPARE ? prev : [...prev, code]));
    }
    setSelectedCode(null);
    setSheetState("full");
    setToolPanel(panel);
  };
  const toggleCompareCountry = useCallback((code: string) => {
    setCompareCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : prev.length >= MAX_COMPARE ? prev : [...prev, code]
    );
  }, []);
  const handleCloseModal = () => {
    if (!selectedCode) return;
    cancelClosing();
    setSelectedCode(null);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSheetState("full");
      return;
    }
    setExitingCode(selectedCode);
    const exitMs = exitDuration();
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setExitingCode(null);
      setSheetState("full");
    }, exitMs);
  };

  const handleShowOnMap = () => {
    if (!selectedCode) return;
    // Side panel (wide screens): details stay open, the country is centred beside the panel.
    // Bottom sheet (phones): the sheet drops to its "peek" height and the country is centred
    // in the free space above it.
    if (!window.matchMedia("(min-width: 40rem)").matches) setSheetState("peek");
    setZoomToCountryCode(selectedCode);
  };

  // Previous/next arrows in the details: select the country and have the map bring it into view
  const handleStepCountry = useCallback((code: string) => {
    cancelClosing();
    setSelectedCode(code);
    setStepToCountryCode(code);
  }, []);
  const handleStepDone = useCallback(() => setStepToCountryCode(null), []);

  // A country picked from search, the top-5 list or the first-place card always opens with its
  // details in full (on phones the sheet may still be at "peek" from an earlier locate)
  const handleSelectCountry = useCallback((code: string, fromList?: boolean) => {
    // While comparing, a country picked from the search, the top-5 list or the first-place card
    // joins the comparison
    if (toolPanelRef.current === "compare") {
      setCompareCodes((prev) => (prev.includes(code) || prev.length >= MAX_COMPARE ? prev : [...prev, code]));
      return;
    }
    setToolPanel(null);
    cancelClosing();
    setHighlightOnlyCode(null);
    setSelectedCode(code);
    if (fromList) setSheetState("full");
  }, []);

  return (
    <div
      className="flex h-dvh w-screen flex-col overflow-hidden"
      style={{
        ...paletteVars(),
        backgroundColor: "var(--map-bg)",
        // Grain textures and strengths, picked up by .map-grain and .ui-grain in map.css
        ["--map-grain-image" as string]: GRAIN_IMAGE,
        ["--map-grain-opacity" as string]: GRAIN_STRENGTH,
        ["--ui-grain-image" as string]: GRAIN_IMAGE,
        ["--ui-grain-opacity" as string]: GRAIN_STRENGTH,
      }}
    >
      <SiteNavbar />
      <ButtonTooltips />
      <main className="map-stage relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <WorldMap
          selectedCode={selectedCode}
          onSelectCountry={handleSelectCountry}
          zoomToCountryCode={zoomToCountryCode}
          onZoomToCountryDone={() => setZoomToCountryCode(null)}
          stepToCountryCode={stepToCountryCode}
          onStepToCountryDone={handleStepDone}
          highlightOnlyCode={highlightOnlyCode}
          onClearHighlightOnly={() => setHighlightOnlyCode(null)}
          onClearSelection={handleCloseModal}
          panelClosing={!selectedCode && !toolPanel && (exitingCode !== null || exitingTool !== null)}
          docked={!!selectedCode || toolPanel !== null}
          compareCodes={toolPanel === "compare" ? compareCodes : null}
          onToggleCompareCountry={toggleCompareCountry}
          onOpenCompare={() => openToolPanel("compare")}
          onOpenInfo={() => openToolPanel("info")}
          compareOpen={toolPanel === "compare"}
          infoOpen={toolPanel === "info"}
        />
      </main>

      {/* When a country is zoomed/highlighted, click on map (non-country or other country) clears selection; overlay allows hover/tooltip to reach map */}
      {highlightOnlyCode && (
        <div
          className="fixed inset-0 z-40 cursor-pointer pointer-events-none"
          onClick={() => setHighlightOnlyCode(null)}
          aria-label="Click to show all countries"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setHighlightOnlyCode(null);
            }
          }}
        />
      )}

      {(selectedCode ?? exitingCode) && (
        <Modal
          countryCode={(selectedCode ?? exitingCode)!}
          onClose={handleCloseModal}
          onShowOnMap={handleShowOnMap}
          onSelectCountry={handleStepCountry}
          sheetState={sheetState}
          onSheetStateChange={setSheetState}
          closing={!selectedCode}
          onCompare={() => openToolPanel("compare")}
        />
      )}

      {(toolPanel === "compare" || exitingTool === "compare") && (
        <ComparePanel
          codes={compareCodes}
          onAdd={(code) => setCompareCodes((prev) => (prev.includes(code) || prev.length >= MAX_COMPARE ? prev : [...prev, code]))}
          onRemove={(code) => setCompareCodes((prev) => prev.filter((c) => c !== code))}
          onSetCodes={setCompareCodes}
          onClose={closeToolPanel}
          closing={toolPanel !== "compare"}
        />
      )}

      {(toolPanel === "info" || exitingTool === "info") && (
        <InfoPanel onClose={closeToolPanel} closing={toolPanel !== "info"} />
      )}
    </div>
  );
}

