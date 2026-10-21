/* Copied verbatim from thebitcoinway.com's site-wide custom code (October 2026). Keep in step with the site; see app/SiteTracking.tsx. */

(function () {
  var CFG = {
    storageKey: "__tbw_attrib_v1",
    cookieName: "__tbw_attrib_v1",
    cookieDays: 90,
    cookieSameSite: "Lax",
    cookieSecure: true,
    cookieDomain: null,

    params: ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_id","gclid","fbclid","msclkid", "twclid"],
    saveRawQuery: true,

    enableReferrerOnlyFallback: true,
    searchEngineHosts: ["google.","bing.","yahoo.","duckduckgo.","baidu.","yandex.","ecosia.","brave."],

    ftPrefix: "ft_",
    ltPrefix: "lt_"
  };

  function nowIso() { return new Date().toISOString(); }

  function parseQuery(search) {
    var out = {};
    if (!search) return out;
    var s = search.charAt(0) === "?" ? search.substring(1) : search;
    if (!s) return out;
    s.split("&").forEach(function (part) {
      if (!part) return;
      var kv = part.split("=");
      var k = decodeURIComponent(kv[0] || "").trim();
      if (!k) return;
      var v = decodeURIComponent((kv[1] || "").replace(/\+/g, " ")).trim();
      if (out[k] == null) out[k] = v;
    });
    return out;
  }

  function getHostname(urlStr) {
    try { return new URL(urlStr).hostname || ""; } catch (e) { return ""; }
  }

  function isExternalReferrer(ref) {
    try {
      if (!ref) return false;
      var u = new URL(ref);
      return u.hostname && u.hostname !== location.hostname;
    } catch (e) { return false; }
  }
  
  function isIgnoredReferrer(ref) {
    try {
      if (!ref) return false;
      var h = new URL(ref).hostname.toLowerCase();
      return (
        h === "cal.com" ||
        h === "app.cal.com" ||
        h.endsWith(".cal.com")
      );
    } catch (e) {
      return false;
    }
  }

  function isSearchEngineHost(hostname) {
    if (!hostname) return false;
    var h = hostname.toLowerCase();
    for (var i = 0; i < CFG.searchEngineHosts.length; i++) {
      if (h.indexOf(CFG.searchEngineHosts[i]) !== -1) return true;
    }
    return false;
  }

  function readCookie(name) {
    var m = document.cookie.match(new RegExp("(^|;\\s*)" + name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)"));
    return m ? decodeURIComponent(m[2]) : null;
  }

  function writeCookie(name, value, days) {
    var expires = "";
    if (typeof days === "number") {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + d.toUTCString();
    }
    var cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    if (CFG.cookieDomain) cookie += "; domain=" + CFG.cookieDomain;
    if (CFG.cookieSameSite) cookie += "; SameSite=" + CFG.cookieSameSite;
    if (CFG.cookieSecure) cookie += "; Secure";
    document.cookie = cookie;
  }

  function safeJsonParse(s) { try { return JSON.parse(s); } catch (e) { return null; } }

  function getState() {
    var c = readCookie(CFG.cookieName);
    var fromCookie = c ? safeJsonParse(c) : null;
    if (fromCookie && typeof fromCookie === "object") return fromCookie;

    try {
      var ls = localStorage.getItem(CFG.storageKey);
      var fromLS = ls ? safeJsonParse(ls) : null;
      if (fromLS && typeof fromLS === "object") return fromLS;
    } catch (e) {}

    return { ft: null, lt: null, meta: { v: 1 } };
  }

  function setState(state) {
    var s = JSON.stringify(state);
    writeCookie(CFG.cookieName, s, CFG.cookieDays);
    try { localStorage.setItem(CFG.storageKey, s); } catch (e) {}
    try { sessionStorage.setItem(CFG.storageKey, s); } catch (e) {}
  }

  function pickAttributionParams(q) {
    var out = {};
    var hasAny = false;
    CFG.params.forEach(function (k) {
      if (q[k] != null && q[k] !== "") {
        out[k] = q[k];
        hasAny = true;
      }
    });
    return { data: out, hasAny: hasAny };
  }

  function buildTouch(attribParams, rawQuery) {
    var touch = {
      ts: nowIso(),
      landing_page: location.href,
      referrer: isExternalReferrer(document.referrer) ? document.referrer : "",
      params: attribParams
    };
    if (CFG.saveRawQuery && rawQuery) touch.raw_query = rawQuery;
    return touch;
  }

  // Decide if LT should be replaced (not merged)
  function shouldReplaceLastTouch(existingLT, incomingParams, incomingRawQuery) {
    if (!incomingParams || Object.keys(incomingParams).length === 0) return false;
    if (!existingLT) return true;

    var ex = existingLT.params || {};
    var inKeys = Object.keys(incomingParams);
    var exKeys = Object.keys(ex);

    // If existing has keys that incoming does not, we should replace (clears stale term/content/etc.)
    // Example: existing has utm_term but incoming referrer-only doesn't.
    for (var i = 0; i < exKeys.length; i++) {
      if (incomingParams[exKeys[i]] == null) return true;
    }

    // If any overlapping key differs, replace
    for (var j = 0; j < inKeys.length; j++) {
      var k = inKeys[j];
      if ((incomingParams[k] || "") !== (ex[k] || "")) return true;
    }

    // raw_query differences should also replace
    var exRQ = existingLT.raw_query || "";
    var inRQ = incomingRawQuery || "";
    if (CFG.saveRawQuery && (exRQ !== inRQ) && (inRQ || exRQ)) return true;

    return false;
  }

  // ====== CAPTURE ON PAGE LOAD ======
  var q = parseQuery(location.search);
  var rawQuery = location.search ? location.search.replace(/^\?/, "") : "";
  var picked = pickAttributionParams(q);

  var state = getState();

  var incomingParams = null;

  // Priority 1: UTMs/clickIDs
  if (picked.hasAny) {
    incomingParams = picked.data;
  }
  // Priority 2: referrer-only fallback
  else if (CFG.enableReferrerOnlyFallback && isExternalReferrer(document.referrer) && !isIgnoredReferrer(document.referrer) ) {
    var host = getHostname(document.referrer);
    if (host) {
      incomingParams = {
        utm_source: host,
        utm_medium: isSearchEngineHost(host) ? "organic" : "referral",
        utm_campaign: "referrer-only"
      };
      // rawQuery remains "" here — good.
      rawQuery = "";
    }
  }

  if (incomingParams && !isIgnoredReferrer(document.referrer)) {
    // Replace LT (clears stale fields)
    if (shouldReplaceLastTouch(state.lt, incomingParams, rawQuery)) {
      state.lt = buildTouch(incomingParams, rawQuery);
    }

    // Set FT only once
    if (!state.ft) {
      state.ft = buildTouch(incomingParams, rawQuery);
    }

    setState(state);
  }

  // ====== FORM INJECTION (unchanged) ======
  function setInputValue(input, value) {
    if (!input) return;
    if (value == null) value = "";
    input.value = String(value);
  }

  function fillForm(form) {
    if (!form) return;
    var st = getState();

    function findField(name) {
      return form.querySelector('[name="' + name + '"]') || form.querySelector('#' + CSS.escape(name));
    }

    if (st.ft) {
      setInputValue(findField(CFG.ftPrefix + "ts"), st.ft.ts || "");
      setInputValue(findField(CFG.ftPrefix + "landing_page"), st.ft.landing_page || "");
      setInputValue(findField(CFG.ftPrefix + "referrer"), st.ft.referrer || "");
      if (CFG.saveRawQuery) setInputValue(findField("raw_query"), (st.ft.raw_query || (st.lt && st.lt.raw_query) || ""));
      CFG.params.forEach(function (k) {
        setInputValue(findField(CFG.ftPrefix + k), (st.ft.params && st.ft.params[k]) || "");
      });
    }

    if (st.lt) {
      setInputValue(findField(CFG.ltPrefix + "ts"), st.lt.ts || "");
      setInputValue(findField(CFG.ltPrefix + "landing_page"), st.lt.landing_page || "");
      setInputValue(findField(CFG.ltPrefix + "referrer"), st.lt.referrer || "");
      if (CFG.saveRawQuery) setInputValue(findField("raw_query"), (st.lt.raw_query || (st.ft && st.ft.raw_query) || ""));
      CFG.params.forEach(function (k) {
        setInputValue(findField(CFG.ltPrefix + k), (st.lt.params && st.lt.params[k]) || "");
      });
    }
  }

  function onReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 0);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  onReady(function () {
    var forms = document.querySelectorAll("form");
    forms.forEach(function (f) {
      fillForm(f);
      f.addEventListener("submit", function () { fillForm(f); }, { capture: true });
    });
  });

})();
