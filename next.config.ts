import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves the site from a subdirectory of the user domain.
  ...(isGitHubPages
    ? {
        basePath: "/developer-portfolio",
        assetPrefix: "/developer-portfolio",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
