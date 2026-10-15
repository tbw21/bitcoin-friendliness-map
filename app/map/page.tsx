"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { initializeCountries, getAllCountries } from "@/data/countriesCsv";
import WorldMap from "./WorldMap";
import Modal from "./Modal";
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
  // Deep link: open the country named in ?country=XX once the data has loaded
  const urlSyncReadyRef = useRef(false);
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("country")?.toUpperCase();
    if (!code || !/^[A-Z]{2}$/.test(code)) {
      urlSyncReadyRef.current = true;
      return;
    }
    initializeCountries().then(() => {
      if (getAllCountries()[code]) setSelectedCode(code);
      urlSyncReadyRef.current = true;
    });
  }, []);

  // Keep ?country= in step with the open country so the view can be shared or bookmarked
  useEffect(() => {
    if (!urlSyncReadyRef.current) return;
    const url = new URL(window.location.href);
    if (selectedCode) url.searchParams.set("country", selectedCode);
    else url.searchParams.delete("country");
    window.history.replaceState(null, "", url);
  }, [selectedCode]);

  const handleCloseModal = () => {
    setSelectedCode(null);
    setSheetState("full");
  };

  const handleShowOnMap = () => {
    if (!selectedCode) return;
    // Side panel (wide screens): details stay open, the country is centred beside the panel.
    // Bottom sheet (phones): the sheet drops to its "peek" height and the country is centred
    // in the free space above it.
    if (!window.matchMedia("(min-width: 768px)").matches) setSheetState("peek");
    setZoomToCountryCode(selectedCode);
  };

  // Previous/next arrows in the details: select the country and have the map bring it into view
  const handleStepCountry = useCallback((code: string) => {
    setSelectedCode(code);
    setStepToCountryCode(code);
  }, []);
  const handleStepDone = useCallback(() => setStepToCountryCode(null), []);

  // A country picked from search, the top-5 list or the first-place card always opens with its
  // details in full (on phones the sheet may still be at "peek" from an earlier locate)
  const handleSelectCountry = useCallback((code: string, fromList?: boolean) => {
    setHighlightOnlyCode(null);
    setSelectedCode(code);
    if (fromList) setSheetState("full");
  }, []);

  return (
    <div
      className="flex h-screen w-screen flex-col overflow-hidden"
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
      <main className="map-stage flex flex-1 flex-col overflow-hidden">
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

      {selectedCode && (
        <Modal
          countryCode={selectedCode}
          onClose={handleCloseModal}
          onShowOnMap={handleShowOnMap}
          onSelectCountry={handleStepCountry}
          sheetState={sheetState}
          onSheetStateChange={setSheetState}
        />
      )}
    </div>
  );
}

