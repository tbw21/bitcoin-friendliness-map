import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a second build (e.g. an experiment branch) live beside the main one:
  // NEXT_DIST_DIR=.next-experiment next build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // The app is the map: the bare address goes straight to it (anything after a "?" is kept)
  async redirects() {
    return [{ source: "/", destination: "/map", permanent: false }];
  },
};

export default nextConfig;
