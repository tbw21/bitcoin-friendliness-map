"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { initializeCountries, getAllCountries } from "@/data/countriesCsv";
import WorldMap from "./WorldMap";
import Modal from "./Modal";
import { paletteVars } from "@/data/palettes";

// Film grain. One tiling noise texture, coloured and blended four ways:
//  - dark:   only dark specks, laid straight on top (like dust or ink)
//  - light:  only light specks
//  - both:   grey grain that lightens some pixels and darkens others, leaving colours untinted
//  - colour: the same, but each speck has its own tint, as in colour film
type GrainMode = "dark" | "light" | "both" | "colour";
const GRAIN_MODES: Record<GrainMode, { label: string; blend: "normal" | "overlay"; filter: string }> = {
  dark: {
    label: "Dark",
    blend: "normal",
    filter: "<feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.7 0.7 0.7 0 -0.72'/>",
  },
  light: {
    label: "Light",
    blend: "normal",
    filter: "<feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.7 0.7 0.7 0 -0.72'/>",
  },
  both: {
    label: "Dark + light",
    blend: "overlay",
    filter:
      "<feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='linear' slope='1.6' intercept='-0.15'/></feComponentTransfer>",
  },
  colour: {
    label: "Colour",
    blend: "overlay",
    filter: "<feComponentTransfer><feFuncA type='linear' slope='1.6' intercept='-0.15'/></feComponentTransfer>",
  },
};

function grainImage(mode: GrainMode): string {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'>" +
    "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch'/>" +
    GRAIN_MODES[mode].filter +
    "</filter><rect width='240' height='240' filter='url(#g)'/></svg>";
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export default function MapPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [zoomToCountryCode, setZoomToCountryCode] = useState<string | null>(null);
  const [stepToCountryCode, setStepToCountryCode] = useState<string | null>(null);
  const [highlightOnlyCode, setHighlightOnlyCode] = useState<string | null>(null);
  const [grainMode, setGrainMode] = useState<GrainMode>("both");
  const [grainStrength, setGrainStrength] = useState(28);
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

  const handleSelectCountry = useCallback((code: string) => {
    setHighlightOnlyCode(null);
    setSelectedCode(code);
  }, []);

  return (
    <div
      className="flex h-screen w-screen flex-col overflow-hidden"
      style={{ ...paletteVars(), backgroundColor: "var(--map-bg)" }}
    >
      <main className="flex flex-1 flex-col overflow-hidden">
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
          sheetPeek={sheetState === "peek"}
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

      {/* Film grain over the whole view: purely decorative, never intercepts input */}
      <div
        className="grain-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: grainImage(grainMode),
          mixBlendMode: GRAIN_MODES[grainMode].blend,
          opacity: grainStrength / 100,
        }}
      />

      {/* TEMPORARY (grain testing): pick the kind of grain and its strength. Remove before launch,
          then hard-code the chosen values as the two useState defaults above. */}
      <div className="absolute top-[4.5rem] left-4 z-10 flex flex-col gap-2 rounded-md border border-zinc-700 bg-zinc-900/95 p-2 text-xs text-white shadow-sm">
        <div className="flex gap-1" role="group" aria-label="Grain type">
          {(Object.keys(GRAIN_MODES) as GrainMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setGrainMode(mode)}
              aria-pressed={grainMode === mode}
              className={`h-8 rounded px-2 font-semibold cursor-pointer transition-colors ${
                grainMode === mode ? "bg-white text-zinc-900" : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              }`}
            >
              {GRAIN_MODES[mode].label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2">
          <span className="shrink-0 text-zinc-300">Grain</span>
          <input
            type="range"
            min={0}
            max={80}
            step={1}
            value={grainStrength}
            onChange={(event) => setGrainStrength(Number(event.target.value))}
            className="h-8 w-full min-w-[9rem] cursor-pointer"
            aria-label="Grain strength"
          />
          <span className="w-9 shrink-0 text-right tabular-nums">{grainStrength}%</span>
        </label>
      </div>

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

