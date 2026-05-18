# LesArch — Product Requirements Document

## Original problem statement
User asked to analyze the GitHub repo [`lesantwi/LesArch-1.1`](https://github.com/lesantwi/LesArch-1.1) (a static multi-page HTML site mapping archaeological wonders). After analysis, user requested to "do all that you have suggested" — a full set of enhancements including: README/LICENSE, single source-of-truth data refactor, SEO + Open Graph + schema.org, map improvements (clustering, timeline, custom era icons), 3D viewer upgrade with AR + citation block, GitHub Issues-backed forms, distinctive design system, accessibility, i18n, IIIF support, performance, GitHub Actions CI/CD.

## User choices (locked in conversation)
- **Framework:** Astro (migration from static HTML)
- **Author:** Leslie Antwi · leslieantwi2@gmail.com
- **Forms:** GitHub Issues redirect (Formspree deferred until user signs up)
- **Design:** "Surprise me" → I chose a custom **"Stratigraphy"** earth-toned aesthetic (Fraunces variable serif + Public Sans + JetBrains Mono)
- **i18n:** EN active; FR/AR/JA strings ready as overlays (full locale routing deferred — community translations welcome)
- **Analytics:** Plausible script wired but commented out (user enables when ready)
- **IIIF:** OpenSeadragon viewer integrated, ready for IIIF manifests when published

## Personas
- 🎓 **Researcher / academic** — wants citable models, DOIs, BibTeX export, FAIR data
- 🧑‍🎓 **Student** — wants engaging context for an essay or class
- 🏛️ **Heritage enthusiast / general public** — wants beautiful, immersive exploration
- 🌍 **Educator** — wants accessible content in their own language

## Architecture
- **Framework:** Astro 5 (static-site generator)
- **Hosting:** GitHub Pages at `https://lesantwi.github.io/LesArch-1.1/`
- **Maps:** Leaflet 1.9.4 + MarkerCluster 1.5.3 + CARTO basemaps
- **3D:** Google `<model-viewer>` 4.0.0 with WebXR/AR support, **lazy-loaded** on user click
- **IIIF:** OpenSeadragon 4.1.0 (loads only when a site has a manifest)
- **CI/CD:** GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)
- **Forms:** GitHub Issues pre-fill via `window.open` — no backend, fully transparent
- **No backend / no MongoDB** (pure static site)

## File map
```
/app/frontend/
├── astro.config.mjs              # base=/LesArch-1.1, i18n, sitemap
├── package.json
├── README.md
├── LICENSE                       # MIT (code) + CC BY 4.0 (content)
├── CONTRIBUTING.md
├── .github/workflows/deploy.yml  # GitHub Pages CI/CD
├── public/
│   ├── assets/                   # WebP-optimized images (25 MB)
│   ├── models/le_pont_du_gard.glb (50 MB — lazy-loaded)
│   └── robots.txt
└── src/
    ├── data/sites.ts             # SINGLE SOURCE OF TRUTH — 7 sites
    ├── i18n/ui.ts                # EN + FR/AR/JA overlays
    ├── layouts/Layout.astro      # SEO/OG/JSON-LD/header/footer/theme
    ├── components/SiteCard.astro
    ├── styles/global.css         # "Stratigraphy" design system
    └── pages/
        ├── index.astro
        ├── map.astro             # Leaflet + clustering + timeline
        ├── projects.astro
        ├── about.astro
        ├── contact.astro         # GitHub Issues forms
        └── sites/[slug].astro    # dynamic detail pages
```

## What's been implemented (May 18, 2026)
- ✅ Migrated 9 hand-written HTML files → Astro project with 1 dynamic template
- ✅ Single source of truth: `src/data/sites.ts` (7 sites with full metadata + era + timeline data)
- ✅ Map: Leaflet + marker clustering + custom era-coded icons + search + era filter + status filter + **timeline slider** (BCE–AD)
- ✅ 3D viewer: Google `<model-viewer>` with WebXR/AR, **lazy-loaded** behind a poster + "Load 3D model" button (saves bandwidth)
- ✅ Citation block: APA / BibTeX / DOI tabs + one-click copy
- ✅ SEO: `<title>`, `<meta description>`, canonical, Open Graph, Twitter cards, schema.org JSON-LD (Place / LandmarksOrHistoricalBuildings on detail pages, WebSite elsewhere), `hreflang` alternates
- ✅ Auto-generated sitemap-index.xml via `@astrojs/sitemap`
- ✅ Contact + 3D model submission forms → open pre-filled GitHub Issues (transparent, no backend, no secrets)
- ✅ "Stratigraphy" design system: earth palette, layered "strata" bands between sections, Fraunces variable serif (opsz + SOFT axes), Public Sans, JetBrains Mono, light/dark theme toggle with localStorage persistence, custom cursor on desktop, reveal-on-scroll
- ✅ Accessibility: skip link, semantic headings, ARIA labels, keyboard nav, `prefers-reduced-motion`, focus states
- ✅ Performance: images converted to WebP (assets dir: 88 MB → 25 MB), lazy `loading="lazy"` on all images, lazy 3D model load, font preconnect
- ✅ i18n infrastructure: EN/FR/AR/JA strings in `ui.ts`, RTL support for Arabic, `t(locale, key)` helper with English fallback
- ✅ IIIF support: OpenSeadragon integration ready (loads only if a site has `iiifManifest` set)
- ✅ GitHub Actions: deploy to GitHub Pages on push to `main`
- ✅ README.md (project overview, setup, contribution guide pointer, roadmap)
- ✅ CONTRIBUTING.md (4 contribution paths: submit model, edit content, translate, code)
- ✅ LICENSE (MIT for code + CC BY 4.0 for content)
- ✅ robots.txt + sitemap auto-link

## Verification
- ✅ Production build: 12 static pages generated in 2.84 s (home, map, projects, about, contact + 7 site detail pages)
- ✅ Testing agent (iteration 1): **100% pass** — all features verified, no critical or minor blockers
- ✅ Manual visual review of homepage + map + site detail at desktop viewport

## Backlog
### P1 (next session)
- [ ] Wire Formspree as primary contact backend (user is signing up later); preserve GitHub Issues as fallback
- [ ] Enable Plausible analytics — uncomment line in `Layout.astro` after user creates account at plausible.io
- [ ] Add CONTRIBUTING.md screenshots
- [ ] Provide real IIIF manifests for Pont du Gard once high-res imagery is published

### P2
- [ ] Full FR/AR/JA translations (currently only nav + key UI strings translated)
- [ ] Side-by-side reconstruction-vs-ruins 3D compare
- [ ] Annotation hotspots in `<model-viewer>` ("Click here — keystone added in 1758 restoration")
- [ ] Measurement tool in viewer
- [ ] Lighthouse CI in GitHub Actions
- [ ] PWA / offline atlas (manifest + service worker)

### P3
- [ ] Educational content (lesson plans, worksheets per site)
- [ ] Search across descriptions (not just names)
- [ ] User accounts for tracking favorited sites
- [ ] API endpoint for third-party heritage platforms to consume sites.ts as JSON

## Risks & known limitations
- **22 MB hero video** (`homepage_video.mp4`) is the largest asset and dominates initial load on bandwidth-poor connections. Currently set to `preload="metadata"` and `autoplay muted` — acceptable but could be replaced with a still hero or smaller video later.
- **50 MB Pont du Gard `.glb`** is lazy-loaded behind a click — no impact on page load now.
- **Non-EN locale pages don't exist as routes yet** — language switcher shows "EN" with "+3" badge indicating community translations are welcome. Full locale routing is a P2 item.
