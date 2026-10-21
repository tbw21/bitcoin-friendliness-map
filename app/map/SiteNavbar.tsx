"use client";

import React, { useEffect, useRef } from "react";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { Navbar } from "@/webflow/Navbar";
// The site's styles, scoped by DevLink to the navbar (they do not reach the map)
import "@/webflow/css/global.css";

/**
 * The Bitcoin Way's own navbar, exported from the Webflow site with DevLink (the webflow/ folder
 * is generated: re-export it rather than editing it). The webinar banner inside the component is
 * switched off here: on a phone it would take up a third of the screen above the map.
 *
 * Its height is published as --nav-h on <html>, so the details, compare and info panels start
 * below it instead of covering it.
 */
export default function SiteNavbar() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty("--nav-h", `${element.getBoundingClientRect().height}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--nav-h");
    };
  }, []);

  return (
    <div ref={ref} className="relative z-[60] shrink-0">
      <DevLinkProvider>
        <Navbar bannerWebinarVisibility={false} />
      </DevLinkProvider>
    </div>
  );
}
