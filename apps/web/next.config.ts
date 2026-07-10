import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly — apps/web sits inside an npm-workspaces
  // monorepo, and without this Next.js's root inference gets confused by
  // sibling lockfiles (e.g. a parallel worktree checkout of this repo).
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
