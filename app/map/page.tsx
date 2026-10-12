"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { initializeCountries, getAllCountries } from "@/data/countriesCsv";
import WorldMap from "./WorldMap";
import Modal from "./Modal";
import { paletteVars } from "@/data/palettes";

// Film grain, in the three kinds Figma's noise effect offers. Every kind draws its specks as
// their own dots laid straight on top (no blending), so the grain looks the same on dark and
// light areas instead of fading out on them.
//  - mono:  specks of one colour (light)
//  - duo:   light specks and dark specks, in different places. A dark speck on a light colour is
//           far harder to see than a light speck on a dark one at the same strength, so the dark
//           specks are drawn DUO_DARK_GAIN times stronger; the strength setting is that of the
//           light specks.
//  - multi: specks in many colours
// The map and the interface each have their own grain: the map's is part of the map and moves
// with it; the interface's sits on the panels and controls.
type GrainKind = "mono" | "duo" | "multi";
const DUO_DARK_GAIN = 2;
// gain: how much stronger than the strength setting the layer is drawn (the texture itself makes
// up for it where needed)
const GRAIN_KINDS: Record<GrainKind, { label: string; filter: string; gain: number }> = {
  mono: {
    label: "Mono",
    filter: "<feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  5 0 0 0 -2.6'/>",
    gain: 1,
  },
  duo: {
    label: "Duo",
    gain: DUO_DARK_GAIN,
    filter:
      `<feColorMatrix in='n' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  ${5 / DUO_DARK_GAIN} 0 0 0 ${-2.6 / DUO_DARK_GAIN}' result='light'/>` +
      "<feColorMatrix in='n' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 5 0 0 -2.6' result='dark'/>" +
      "<feMerge><feMergeNode in='dark'/><feMergeNode in='light'/></feMerge>",
  },
  multi: {
    label: "Multi",
    filter: "<feColorMatrix values='4 0 0 0 -1.5  0 4 0 0 -1.5  0 0 4 0 -1.5  2 2 2 0 -2.7'/>",
    gain: 1,
  },
};

function grainImage(kind: GrainKind): string {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g' color-interpolation-filters='sRGB'>" +
    "<feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='11' stitchTiles='stitch' result='n'/>" +
    GRAIN_KINDS[kind].filter +
    "</filter><rect width='240' height='240' filter='url(#g)'/></svg>";
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// TEMPORARY (grain testing): one row of the test panel
function GrainControl({
  label,
  kind,
  strength,
  onKind,
  onStrength,
}: {
  label: string;
  kind: GrainKind;
  strength: number;
  onKind: (kind: GrainKind) => void;
  onStrength: (strength: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="w-16 shrink-0 text-zinc-300">{label}</span>
        <div className="flex gap-1" role="group" aria-label={`${label} grain type`}>
          {(Object.keys(GRAIN_KINDS) as GrainKind[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onKind(option)}
              aria-pressed={kind === option}
              className={`h-7 rounded px-2 font-semibold cursor-pointer transition-colors ${
                kind === option ? "bg-white text-zinc-900" : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              }`}
            >
              {GRAIN_KINDS[option].label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-center gap-2">
        <span className="w-16 shrink-0" />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={strength}
          onChange={(event) => onStrength(Number(event.target.value))}
          className="h-6 w-full min-w-[8rem] cursor-pointer"
          aria-label={`${label} grain strength`}
        />
        <span className="w-9 shrink-0 text-right tabular-nums">{strength}%</span>
      </label>
    </div>
  );
}

export default function MapPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [zoomToCountryCode, setZoomToCountryCode] = useState<string | null>(null);
  const [stepToCountryCode, setStepToCountryCode] = useState<string | null>(null);
  const [highlightOnlyCode, setHighlightOnlyCode] = useState<string | null>(null);
  const [mapGrain, setMapGrain] = useState<{ kind: GrainKind; strength: number }>({ kind: "duo", strength: 8 });
  const [uiGrain, setUiGrain] = useState<{ kind: GrainKind; strength: number }>({ kind: "duo", strength: 5 });
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
      style={{
        ...paletteVars(),
        backgroundColor: "var(--map-bg)",
        // Grain textures and strengths, picked up by .map-grain and .ui-grain in map.css
        ["--map-grain-image" as string]: grainImage(mapGrain.kind),
        ["--map-grain-opacity" as string]: Math.min(1, (mapGrain.strength / 100) * GRAIN_KINDS[mapGrain.kind].gain),
        ["--ui-grain-image" as string]: grainImage(uiGrain.kind),
        ["--ui-grain-opacity" as string]: Math.min(1, (uiGrain.strength / 100) * GRAIN_KINDS[uiGrain.kind].gain),
      }}
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

      {/* TEMPORARY (grain testing): choose the kind of grain and its strength, separately for the
          map and the interface. Remove before launch, then hard-code the chosen values as the two
          useState defaults above. */}
      <div className="absolute top-[4.5rem] left-4 z-10 flex flex-col gap-2 rounded-md border border-zinc-700 bg-zinc-900/95 p-2 text-xs text-white shadow-sm">
        <GrainControl
          label="Map"
          kind={mapGrain.kind}
          strength={mapGrain.strength}
          onKind={(kind) => setMapGrain((g) => ({ ...g, kind }))}
          onStrength={(strength) => setMapGrain((g) => ({ ...g, strength }))}
        />
        <GrainControl
          label="Interface"
          kind={uiGrain.kind}
          strength={uiGrain.strength}
          onKind={(kind) => setUiGrain((g) => ({ ...g, kind }))}
          onStrength={(strength) => setUiGrain((g) => ({ ...g, strength }))}
        />
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

