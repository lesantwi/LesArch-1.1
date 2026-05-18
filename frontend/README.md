<div align="center">

# 🏛️ LesArch

**Mapping archaeological wonders — through interactive maps, citable 3D reconstructions, and open research data.**

[![Live site](https://img.shields.io/badge/live-lesantwi.github.io%2FLesArch--1.1-B85A3A?style=for-the-badge)](https://lesantwi.github.io/LesArch-1.1/)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-1F4A6B?style=for-the-badge)](https://astro.build/)
[![License: MIT](https://img.shields.io/badge/license-MIT-264E70?style=for-the-badge)](LICENSE)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC_BY_4.0-C8923B?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

</div>

---

## What is LesArch?

**LesArch** is an open-research platform for exploring archaeological heritage through interactive maps and citable 3D reconstructions. It bridges academic rigor and public curiosity — designed for students, researchers, and the endlessly curious.

Featured sites currently include the **Pont du Gard** (Roman aqueduct, France · with [Zenodo DOI](https://doi.org/10.5281/zenodo.15873327)), **Asuka-dera** (Japan's first Buddhist temple), **Larabanga Mosque** (Ghana), **Petra**, the **Great Pyramid of Giza**, the **Roman Colosseum**, and **Machu Picchu**.

## Highlights

- 🗺️ **Interactive atlas** with marker clustering, era timeline slider, and era-coded custom icons (Leaflet + MarkerCluster)
- 🏺 **3D model viewer** with WebXR / AR support ("View in your space") via Google's `<model-viewer>`
- 📚 **Citation block** on every reconstruction — APA, BibTeX, DOI, with one-click copy
- 🔎 **Single source of truth** — all site data lives in [`src/data/sites.ts`](src/data/sites.ts); add a site once and it appears across the map, projects page, homepage, and a dedicated detail page
- 🌍 **i18n-ready** — English, Français, العربية (RTL), 日本語 (community translations welcome)
- 🪟 **IIIF deep-zoom** support via OpenSeadragon for high-resolution heritage photography
- 📨 **Frictionless contribution** — contact and 3D-model submissions open a pre-filled GitHub Issue, keeping all submissions transparent and trackable
- 🎨 **"Stratigraphy" design system** — earth-toned palette, Fraunces (variable serif), Public Sans, custom cursor, micro-interactions, light/dark themes
- ♿ **Accessible** — skip links, proper headings, ARIA, keyboard-friendly, respects `prefers-reduced-motion`
- 🚀 **SEO + Open Graph + schema.org JSON-LD** on every page; auto-generated sitemap and `hreflang` alternates
- 🤖 **CI/CD** — GitHub Actions deploys to GitHub Pages on every push to `main`

## Tech stack

- **Framework:** [Astro 5](https://astro.build/) (static-site generator)
- **Maps:** [Leaflet](https://leafletjs.com/) + [MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster) + CARTO basemaps
- **3D:** [Google `<model-viewer>`](https://modelviewer.dev/)
- **IIIF:** [OpenSeadragon](https://openseadragon.github.io/)
- **Hosting:** GitHub Pages

## Local development

```bash
# Requires Node.js 20.3+
yarn install
yarn dev          # http://localhost:3000

yarn build        # produces ./dist
yarn preview      # serves the production build
```

## Adding a new archaeological site

Open [`src/data/sites.ts`](src/data/sites.ts) and append a new entry to the `SITES` array:

```ts
{
  slug: 'stonehenge',
  name: 'Stonehenge',
  country: 'United Kingdom',
  region: 'Europe',
  era: 'prehistoric',
  eraLabel: 'Late Neolithic, c. 3000–2000 BCE',
  yearStart: -3000,
  yearEnd: -2000,
  type: 'Megalithic Monument',
  status: 'planned',
  coords: [51.1789, -1.8262],
  thumbnail: 'assets/stonehenge-thumb.jpg',
  hero: 'assets/stonehenge-hero.jpg',
  shortDescription: '...',
  longDescription: '...',
  researchRelevance: '...',
  modelAvailable: false,
}
```

That's it — the site automatically appears on the map (with marker + popup + era filter), the projects page, and at `/sites/stonehenge`. If `modelAvailable` is true and `modelUrl` is set, the 3D viewer + citation block render automatically.

## Submitting a 3D model (contributors)

Submissions are handled through GitHub Issues. From the [Contact & Submit](https://lesantwi.github.io/LesArch-1.1/contact) page, fill in the form and a pre-filled issue opens in your browser — review and post.

For research-grade contributions, please **also** deposit your underlying data in [Zenodo](https://zenodo.org/), [iDAI.repo](https://repo.dainst.org/), or [ARIADNE](https://portal.ariadne-infrastructure.eu/) and include the DOI in the issue.

## Translations

Translation strings live in [`src/i18n/ui.ts`](src/i18n/ui.ts). The English keys are the source of truth. To improve a translation, edit the overlay (e.g., `ui.fr`) and open a PR — anything missing falls back to English automatically.

## Deployment

This repo deploys to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`. The live site lives at:

> 🔗 **https://lesantwi.github.io/LesArch-1.1/**

To enable Pages, go to **Settings → Pages → Source: GitHub Actions** in this repo.

## Roadmap

- [ ] Wire up Formspree as a fallback contact backend (in addition to GitHub Issues)
- [ ] Enable [Plausible analytics](https://plausible.io/) — uncomment the script in `src/layouts/Layout.astro`
- [ ] Plug real IIIF manifests once high-res imagery is published
- [ ] Add measurement and annotation hotspots to the 3D viewer
- [ ] Side-by-side "reconstruction vs. ruins" model compare
- [ ] PWA / offline atlas
- [ ] Educational content (lesson plans, downloadable worksheets per site)

## License

- **Code:** [MIT](LICENSE)
- **Content & 3D models:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — please cite as shown on each site's detail page

## Acknowledgements

- Pont du Gard 3D model data: [Zenodo DOI 10.5281/zenodo.15873327](https://doi.org/10.5281/zenodo.15873327)
- Map tiles: CARTO Light & OpenStreetMap contributors
- Built with [Astro](https://astro.build/), [Leaflet](https://leafletjs.com/), and [Google `<model-viewer>`](https://modelviewer.dev/)

---

<div align="center">

**Founder & Lead Developer:** [Leslie Antwi](mailto:leslieantwi2@gmail.com) · _Digital & Computational Archaeology (M.A.), University of Cologne_

</div>
