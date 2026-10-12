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
  };

  const handleShowOnMap = () => {
    if (!selectedCode) return;
    setZoomToCountryCode(selectedCode);
    // With the side panel (wide screens) the details stay open and the country is centred beside it.
    // On narrow screens the dialog covers the map, so close it and keep the country highlighted.
    if (!window.matchMedia("(min-width: 768px)").matches) {
      setHighlightOnlyCode(selectedCode);
      setSelectedCode(null);
    }
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
        />
      )}
    </div>
  );
}

