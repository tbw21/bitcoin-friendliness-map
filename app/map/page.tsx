"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { initializeCountries, getAllCountries } from "@/data/countriesCsv";
import WorldMap from "./WorldMap";
import Modal from "./Modal";
import { paletteVars } from "@/data/palettes";

export default function MapPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [zoomToCountryCode, setZoomToCountryCode] = useState<string | null>(null);
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

      {selectedCode && (
        <Modal
          countryCode={selectedCode}
          onClose={handleCloseModal}
          onShowOnMap={handleShowOnMap}
          onSelectCountry={setSelectedCode}
          sheetState={sheetState}
          onSheetStateChange={setSheetState}
        />
      )}
    </div>
  );
}

