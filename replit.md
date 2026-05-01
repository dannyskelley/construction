# Project Overview

This is an [Eleventy (11ty)](https://www.11ty.dev/) static site built on top of the [CodeStitch Intermediate Website Kit (SASS)](https://github.com/CodeStitchOfficial/Intermediate-Website-Kit-SASS). The current site appears to be a marketing site for "Abstract Construction LLC".

## Tech Stack
- **Static Site Generator:** Eleventy v2 (Nunjucks + Liquid templates)
- **Styles:** SASS compiled to CSS (watched in dev)
- **CMS (dev only):** Decap (Netlify) CMS, with `decap-server` proxy on port 8081
- **Deploy target (original):** Netlify (`netlify.toml`)

## Project Layout
- `src/` — site sources (templates, content, assets, admin)
- `src/config/server.js` — Eleventy dev server options (host, port, etc.)
- `.eleventy.js` — Eleventy config (plugins, passthroughs, filters, shortcodes)
- `public/` — build output (generated, gitignored via `del-cli` on each start)

## Replit Setup
- Workflow `Start application` runs `npm start`, which:
  - cleans `public/`
  - runs `sass --watch`, `eleventy --serve`, and `decap-server` in parallel
- Eleventy dev server is bound to `0.0.0.0:5000` and serves the preview iframe.
- Decap CMS proxy listens on port 8081 (dev only, not exposed publicly).

## Deployment
Configured for Replit Autoscale (static):
- Build: `npm run build`
- Public dir: `public/`
