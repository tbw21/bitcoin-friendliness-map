import Script from "next/script";

/**
 * The same analytics and attribution as every page on thebitcoinway.com.
 *
 * The Webflow site adds these through its site-wide custom code, which does not reach apps on
 * Webflow Cloud, so the map adds them itself. The code below is copied verbatim from the live
 * site (October 2026); keep it in step when the site's custom code changes:
 *
 *  - Webflow Optimize (Intellimize) snippet 117650482
 *  - Google Tag Manager GTM-NXDC83KT
 *  - Optibase (A/B tests)
 *  - Plausible for thebitcoinway.com (outbound links, downloads, custom events)
 *  - ActiveCampaign site tracking, account 1003071768
 *  - The Bitcoin Way's attribution: first and last touch kept 90 days in __tbw_attrib_v1
 *  - Typeform links get the attribution added when clicked
 *  - Referral programme: ?ref= is kept as referrer_id
 *
 * Left out, because the map has nothing for them to act on: the exit-intent popup scripts, the
 * Zapier form-submit forwarder and the Cal booking reader (contact page only). The Meta Pixel on
 * some of the site's pages is left out too: The Bitcoin Way does not use Meta's tools.
 *
 * Only rendered on the live site (SITE_URL is https://www.thebitcoinway.com), so local builds and
 * previews do not send data to these services.
 */
export default function SiteTracking() {
  if (process.env.SITE_URL?.replace(/\/$/, "") !== "https://www.thebitcoinway.com") return null;

  return (
    <>
      {/* Webflow Optimize */}
      <Script id="tbw-intellimize-optin" strategy="afterInteractive">
        {`localStorage.removeItem('intellimize_opt_out_117650482'); if (localStorage.getItem('intellimize_data_tracking_type') !== 'always') { localStorage.setItem('intellimize_data_tracking_type', 'always'); }`}
      </Script>
      <Script id="tbw-wf-ready" strategy="afterInteractive">
        {`(function(e){var s={r:[]};e.wf={r:s.r,ready:t=>{s.r.push(t)}}})(window)`}
      </Script>
      <Script id="tbw-intellimize-queue" strategy="afterInteractive">
        {`(function(e){var s={p:[],r:[]};e.intellimize={p:s.p,r:s.r,push:function(t){s.p.push(t)},ready:function(t){s.r.push(t)}}})(window)`}
      </Script>
      <Script id="tbw-intellimize" strategy="afterInteractive">
        {`var wfClientScript=document.createElement("script");wfClientScript.src="https://cdn.intellimize.co/snippet/117650482.js",wfClientScript.async=!0,wfClientScript.onerror=function(){document.documentElement.className=document.documentElement.className.replace(RegExp(" ?anti-flicker"),"")},document.head.appendChild(wfClientScript);`}
      </Script>

      {/* Google Tag Manager */}
      <Script id="tbw-gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXDC83KT');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NXDC83KT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* Optibase */}
      <Script id="tbw-optibase" src="https://app.optibase.io/script.js" strategy="afterInteractive" {...{ "public-api-key": "cm8cvctab04bnk4vyjwrxx7bj" }} />

      {/* Plausible */}
      <Script
        id="tbw-plausible"
        defer
        data-domain="thebitcoinway.com"
        src="https://plausible.io/js/script.file-downloads.outbound-links.pageview-props.revenue.tagged-events.js"
        strategy="afterInteractive"
      />
      <Script id="tbw-plausible-queue" strategy="afterInteractive">
        {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
      </Script>

      {/* ActiveCampaign site tracking */}
      <Script id="tbw-activecampaign" strategy="afterInteractive">
        {`(function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
    vgo('setAccount', '1003071768');
    vgo('setTrackByDefault', true);

    vgo('process');`}
      </Script>

      {/* The Bitcoin Way's first- and last-touch attribution */}
      <Script id="tbw-attribution" strategy="afterInteractive" src={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/site-scripts/tbw-attribution.js`} />

      {/* Typeform links carry the attribution */}
      <Script id="tbw-typeform-attribution" strategy="afterInteractive" src={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/site-scripts/tbw-typeform-attribution.js`} />

      {/* Referral programme: ?ref= */}
      <Script id="tbw-referral" strategy="afterInteractive" src={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/site-scripts/tbw-referral.js`} />
    </>
  );
}
