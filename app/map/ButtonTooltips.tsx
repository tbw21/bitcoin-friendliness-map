"use client";

import { useEffect, useRef } from "react";

// Timing as in common design systems: the first label waits a moment, so passing over a button on
// the way somewhere else does not flash one; moving on to the next button shows its label at once.
const OPEN_DELAY = 400;
const SKIP_WINDOW = 500;
// Time to move the pointer from the button onto its label without the label going away
const CLOSE_GRACE = 100;
const GAP = 8;
const EDGE = 8;

const TRIGGERS = "button[title], a[title], [role='button'][title], button[data-tip], a[data-tip], [role='button'][data-tip]";

/**
 * Labels for the map's buttons, in place of the browser's own title tooltips (which wait about a
 * second, cannot be styled and never appear for keyboard users).
 *
 * The buttons keep their title attributes in the code; on first hover or focus the text moves to
 * data-tip, so the browser's tooltip does not show as well. The label appears beside the button:
 * to the left in containers marked data-tip-side="left" (the right-hand button column), otherwise
 * below, or above where there is no room below. It is shown for a mouse or pen and for keyboard
 * focus, never for touch, and not for buttons whose words are already on screen (Feedback on wide
 * screens, the Plan B links). Escape hides it, and the pointer can move onto it (WCAG 1.4.13).
 * The site navbar keeps its own behaviour.
 */
export default function ButtonTooltips() {
  const tipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tip = tipRef.current;
    if (!tip) return;

    // The button whose label is showing, and the one whose label is waiting for OPEN_DELAY
    let current: HTMLElement | null = null;
    let pending: HTMLElement | null = null;
    let openTimer = 0;
    let closeTimer = 0;
    let lastHidden = 0;

    const labelOf = (el: HTMLElement) => {
      const title = el.getAttribute("title");
      if (title) {
        el.dataset.tip = title;
        el.removeAttribute("title");
      }
      return el.dataset.tip ?? "";
    };

    const triggerFrom = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      const el = target.closest<HTMLElement>(TRIGGERS);
      if (!el || el.closest(".site-navbar") || el.closest("[inert]")) return null;
      return el;
    };

    const place = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const t = tip.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let x: number;
      let y: number;
      if (el.closest("[data-tip-side='left']") && r.left - GAP - t.width >= EDGE) {
        x = r.left - GAP - t.width;
        y = r.top + (r.height - t.height) / 2;
      } else {
        x = r.left + (r.width - t.width) / 2;
        y = r.bottom + GAP + t.height <= vh - EDGE ? r.bottom + GAP : r.top - GAP - t.height;
      }
      x = Math.min(Math.max(x, EDGE), vw - EDGE - t.width);
      y = Math.min(Math.max(y, EDGE), vh - EDGE - t.height);
      tip.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    };

    // Words the button already shows (not visually hidden ones, which are 1px wide)
    const showsText = (el: HTMLElement) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        if (!node.textContent?.trim()) continue;
        range.selectNodeContents(node);
        if (range.getBoundingClientRect().width > 1) return true;
      }
      return false;
    };

    const show = (el: HTMLElement) => {
      const label = labelOf(el);
      if (!label || (el as HTMLButtonElement).disabled || showsText(el)) return;
      current = el;
      tip.textContent = label;
      tip.dataset.open = "true";
      place(el);
      el.setAttribute("aria-describedby", tip.id);
    };

    const hide = () => {
      window.clearTimeout(openTimer);
      pending = null;
      window.clearTimeout(closeTimer);
      if (current) {
        current.removeAttribute("aria-describedby");
        lastHidden = performance.now();
      }
      current = null;
      delete tip.dataset.open;
    };

    const request = (el: HTMLElement) => {
      window.clearTimeout(closeTimer);
      if (current === el || pending === el) return;
      labelOf(el);
      window.clearTimeout(openTimer);
      const warm = current !== null || performance.now() - lastHidden < SKIP_WINDOW;
      if (warm) {
        hide();
        show(el);
      } else {
        pending = el;
        openTimer = window.setTimeout(() => {
          pending = null;
          show(el);
        }, OPEN_DELAY);
      }
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (event.target instanceof Node && tip.contains(event.target)) {
        window.clearTimeout(closeTimer);
        return;
      }
      const el = triggerFrom(event.target);
      if (el) request(el);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const to = event.relatedTarget;
      const hovered = pending ?? current;
      if (to instanceof Node && (tip.contains(to) || (hovered && hovered.contains(to)))) return;
      window.clearTimeout(openTimer);
      pending = null;
      if (current) closeTimer = window.setTimeout(hide, CLOSE_GRACE);
    };

    const onFocusIn = (event: FocusEvent) => {
      const el = triggerFrom(event.target);
      if (el && el.matches(":focus-visible")) request(el);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && current) hide();
    };

    // A press, a scroll or a resize: the label has done its job or would be in the wrong place
    const onDismiss = () => hide();

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onDismiss);
    document.addEventListener("pointerdown", onDismiss, true);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onDismiss, { passive: true });
    window.addEventListener("resize", onDismiss);
    return () => {
      hide();
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onDismiss);
      document.removeEventListener("pointerdown", onDismiss, true);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onDismiss);
      window.removeEventListener("resize", onDismiss);
    };
  }, []);

  return <div ref={tipRef} id="button-tooltip" role="tooltip" className="button-tooltip" />;
}
