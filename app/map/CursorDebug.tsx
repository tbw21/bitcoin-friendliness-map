"use client";

import React, { useEffect, useRef, useState } from "react";

// TEMPORARY (cursor flicker hunt): shown with ?debug=cursor. Reports what the browser finds
// under the mouse on every move and which cursor that element asks for, and lets parts of the
// map be switched off to see which one disturbs the cursor. Remove once the cause is found.

const describe = (el: Element | null): string => {
  if (!el) return "(nothing)";
  const cls = (el.getAttribute("class") || "").split(/\s+/).filter(Boolean).slice(0, 2).join(".");
  return el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (cls ? "." + cls : "");
};

const TOGGLES: Array<{ key: string; label: string; css: string }> = [
  { key: "grain", label: "Grain off", css: ".map-grain, .ui-grain::after { display: none !important; }" },
  { key: "chart", label: "Chart lines + text off", css: ".map-container svg .chart { display: none !important; }" },
  { key: "hit", label: "Island tap areas off", css: ".map-container svg .hit-areas { display: none !important; }" },
  { key: "tip", label: "Hover label off", css: ".map-tooltip { display: none !important; }" },
  { key: "blur", label: "Panel blur off", css: "* { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }" },
];

export default function CursorDebug() {
  const [now, setNow] = useState("move the mouse over the map");
  const [seen, setSeen] = useState<Record<string, number>>({});
  const [off, setOff] = useState<Record<string, boolean>>({});
  const wheelRef = useRef(0);
  const seenRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("[data-cursor-debug]")) return;
      const { clientX, clientY } = event;
      // Read after the map's own mouse handler has run, so the cursor values are the settled ones
      window.setTimeout(() => {
        const top = document.elementFromPoint(clientX, clientY);
        const line =
          `event target: ${describe(target)} → ${target ? getComputedStyle(target).cursor : "?"}` +
          ` | on top: ${describe(top)} → ${top ? getComputedStyle(top).cursor : "?"}`;
        seenRef.current[line] = (seenRef.current[line] || 0) + 1;
        setNow(`${line} | wheel events so far: ${wheelRef.current}`);
        setSeen({ ...seenRef.current });
      }, 0);
    };
    const onWheel = () => {
      wheelRef.current += 1;
    };
    window.addEventListener("mousemove", onMove, true);
    window.addEventListener("wheel", onWheel, { capture: true, passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove, true);
      window.removeEventListener("wheel", onWheel, true);
    };
  }, []);

  return (
    <div
      data-cursor-debug
      className="fixed left-1/2 top-2 z-[100] w-[min(92vw,720px)] -translate-x-1/2 rounded-md border border-amber-400 bg-black/90 p-2 font-mono text-[11px] leading-snug text-white"
      style={{ cursor: "default" }}
    >
      <style>{TOGGLES.filter((t) => off[t.key]).map((t) => t.css).join("\n")}</style>
      <div className="mb-1 flex flex-wrap gap-1">
        {TOGGLES.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setOff((o) => ({ ...o, [t.key]: !o[t.key] }))}
            className={`rounded px-2 py-1 ${off[t.key] ? "bg-amber-400 text-black" : "bg-zinc-700 text-white"}`}
          >
            {t.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            seenRef.current = {};
            setSeen({});
          }}
          className="rounded bg-zinc-700 px-2 py-1"
        >
          Clear list
        </button>
      </div>
      <div className="text-amber-300">{now}</div>
      <div className="mt-1 max-h-40 overflow-auto">
        {Object.entries(seen)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8)
          .map(([line, count]) => (
            <div key={line}>
              {count}× {line}
            </div>
          ))}
      </div>
    </div>
  );
}
