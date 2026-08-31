# saroj.dev

Portfolio for Saroj Dhungana — Senior Software Engineer (full-stack + Web3 + DevSecOps).

Static Next.js site (App Router, `output: "export"`). No UI frameworks, no Tailwind — hand-written CSS with a light/dark theme, self-hosted fonts via `next/font/google`.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000/developer-portfolio
```

## Build

```sh
npm run build      # writes the static site to out/
npx serve out      # preview the production build
```

The build outputs to `out/` with the base path `/developer-portfolio` baked in (see `next.config.mjs`).

## Deploy to GitHub Pages

The site is deployed as a **project page**:
`https://dhunganasaroj3.github.io/developer-portfolio`

- Framework settings: Pages → Source: *GitHub Actions* (this repo uses the `.github/workflows/deploy.yml` workflow).
- The workflow runs `npm install`, `npm run build`, and uploads `out/` to the `gh-pages` branch via `actions/upload-pages-artifact`.

Notes:

- `basePath: "/developer-portfolio"` in `next.config.mjs` must match the repository name (`developer-portfolio`).
- Fonts are downloaded at build time by `next/font/google` and self-hosted under `out/_next/static/media`, so the deployed site works offline with no external font requests.

## Structure

```
src/
  app/
    layout.tsx     # root layout: fonts (Fraunces / Inter / JetBrains Mono), metadata
    page.tsx       # single page: hero, about, skills, experience, contact
    theme.tsx      # client-side theme toggle (localStorage + prefers-color-scheme)
    globals.css    # all styles: light + dark palettes via CSS custom properties
```

Design notes live in `~/docs/plans/2026-06-28-portfolio-site-design.md`.
