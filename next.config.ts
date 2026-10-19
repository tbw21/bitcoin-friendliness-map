import type { NextConfig } from "next";

// Webflow Cloud serves the app under a path on thebitcoinway.com (the "mount path") and passes it
// in BASE_URL at build time; locally and on Vercel it is empty and the app sits at the root.
// NEXT_PUBLIC_BASE_PATH hands the same path to the browser code, for files it fetches itself
// (the map, the data).
const basePath = process.env.BASE_URL || "";

const nextConfig: NextConfig = {
  // Lets a second build (e.g. an experiment branch) live beside the main one:
  // NEXT_DIST_DIR=.next-experiment next build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  ...(basePath && {
    basePath,
    assetPrefix: process.env.ASSETS_PREFIX || basePath,
  }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // The map is the app's front page; the old /map address still leads there
  async redirects() {
    return [{ source: "/map", destination: "/", permanent: false }];
  },
};

export default nextConfig;

// Enable getCloudflareContext() in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
