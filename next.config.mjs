/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Local dev (npm run dev) serves at /; production builds (npm run build, CI)
  // bake in the GitHub Pages project-site prefix.
  basePath: process.env.NODE_ENV === "development" ? "" : "/developer-portfolio",
};

export default nextConfig;
