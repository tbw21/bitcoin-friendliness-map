import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a second build (e.g. an experiment branch) live beside the main one:
  // NEXT_DIST_DIR=.next-experiment next build
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
