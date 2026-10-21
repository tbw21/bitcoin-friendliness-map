/* Copied verbatim from thebitcoinway.com's site-wide custom code (October 2026). Keep in step with the site; see app/SiteTracking.tsx. */

(function () {
  const TYPEFORM_HOST = "thebitcoinway.typeform.com";

  function getAttributionState() {
    try {
      const ls = localStorage.getItem("__tbw_attrib_v1");
      if (ls) return JSON.parse(ls);
    } catch (e) {}
    try {
      const match = document.cookie.match(/__tbw_attrib_v1=([^;]+)/);
      if (match) return JSON.parse(decodeURIComponent(match[1]));
    } catch (e) {}
    return null;
  }

  function buildHashParams(obj) {
    return Object.entries(obj)
      .filter(([_, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
  }

  function buildPayload(state) {
    if (!state || !state.lt) return null;
    const lt = state.lt;
    const p = lt.params || {};
    return {
      // timestamps / context
      lt_ts: lt.ts,
      lt_landing_page: lt.landing_page,
      lt_referrer: lt.referrer,
      // attribution params
      utm_source: p.utm_source,
      utm_medium: p.utm_medium,
      utm_campaign: p.utm_campaign,
      utm_term: p.utm_term,
      utm_content: p.utm_content,
      lt_utm_id: p.utm_id,
      // click IDs
      lt_gclid: p.gclid,
      lt_fbclid: p.fbclid,
      lt_msclkid: p.msclkid,
      // optional forensic
      raw_query: lt.raw_query
    };
  }

  // Take whatever URL is currently on the banner, append fresh attribution.
  // Re-running on an already-decorated link is safe: the split() strips the
  // old hash first, so repeat clicks always get current state.
  function decorate(baseHref) {
    const payload = buildPayload(getAttributionState());
    if (!payload) return baseHref;
    const hash = buildHashParams(payload);
    if (!hash) return baseHref;
    return `${baseHref.split("#")[0]}#${hash}`;
  }

  // One listener on the document, CAPTURE phase. Banners can be injected,
  // cloned, sliced into sliders, or re-rendered by Finsweet at any time —
  // the click passes through document first, so we never miss it, and we run
  // before any slider/CMS handler that might stopPropagation lower down.
  //
  // We rewrite the link's href in place and let the browser navigate
  // natively. That means the banner's own "Open in" setting, cmd/ctrl-click
  // to open a new tab, etc. all keep working — no preventDefault, no popups.
  function handle(e) {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const link = t.closest(`a[href*="${TYPEFORM_HOST}"]`);
    if (!link) return;
    link.href = decorate(link.href);
  }

  document.addEventListener("click", handle, true);     // left / cmd / ctrl-click
  document.addEventListener("auxclick", handle, true);  // middle-click → new tab
})();
