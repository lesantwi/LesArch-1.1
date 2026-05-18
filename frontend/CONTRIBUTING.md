# Contributing to LesArch

Thanks for your interest in contributing to **LesArch** — an open-research platform for archaeological heritage. We welcome contributions from researchers, students, designers, developers, and the simply curious.

There are **four** main ways to help.

---

## 1. Submit a 3D model 🏺

We welcome research-grade 3D reconstructions of archaeological sites.

**Easiest path:** Go to the [Contact & Submit page](https://lesantwi.github.io/LesArch-1.1/contact) and use the "Submit a 3D Model" form. It opens a pre-filled GitHub Issue you can review and post.

**Recommended workflow for research-grade submissions:**

1. Deposit your 3D model + metadata in a long-term archaeological repository:
   - [Zenodo](https://zenodo.org/) — gets you a citable DOI
   - [iDAI.repo](https://repo.dainst.org/) (German Archaeological Institute)
   - [ARIADNE](https://portal.ariadne-infrastructure.eu/)
2. Open a [new issue](https://github.com/lesantwi/LesArch-1.1/issues/new?labels=submission,3d-model) with:
   - Site name, country, era, coordinates
   - DOI / repository link to the model
   - License (we prefer CC BY 4.0 or more permissive)
   - Short and long descriptions
3. A maintainer will review and, on acceptance, add the site to [`src/data/sites.ts`](src/data/sites.ts) and the model file to `public/models/`.

**Accepted formats:** `.glb` preferred (single file, web-friendly). Also: `.gltf`, `.obj`, `.fbx`.
**File size:** under 50 MB if possible. For larger models, host on Zenodo and link.

---

## 2. Add or improve a site's content 📚

If you spot an inaccuracy, missing reference, or want to flesh out a site description, you can either:

- Open an issue describing the change, **or**
- Open a pull request editing [`src/data/sites.ts`](src/data/sites.ts) directly.

The site data is a single TypeScript file — adding a new site is **one object** and it auto-propagates to the map, projects page, homepage, and a dedicated detail page.

---

## 3. Translate the UI 🌍

LesArch ships with English, French, Arabic, and Japanese scaffolding. The English strings in [`src/i18n/ui.ts`](src/i18n/ui.ts) are the source of truth — other locales are overlays.

To improve a translation:

1. Open [`src/i18n/ui.ts`](src/i18n/ui.ts)
2. Find the locale block (e.g., `ui.fr = { ... }`)
3. Translate the strings (anything missing falls back to English automatically)
4. Open a PR — note your locale and any cultural considerations

---

## 4. Code, design, and infrastructure 🛠️

### Setup

```bash
git clone https://github.com/lesantwi/LesArch-1.1.git
cd LesArch-1.1
yarn install     # requires Node.js 20.3+
yarn dev         # http://localhost:3000
```

### Project structure

```
src/
├── data/sites.ts          # single source of truth — sites, eras, facts
├── i18n/ui.ts             # translation strings
├── layouts/Layout.astro   # shared layout (header, footer, SEO, theme)
├── components/            # reusable .astro components
├── pages/
│   ├── index.astro        # homepage
│   ├── map.astro          # Leaflet atlas
│   ├── projects.astro     # all sites
│   ├── about.astro
│   ├── contact.astro      # GitHub Issues forms
│   └── sites/[slug].astro # dynamic site detail (one per entry in sites.ts)
└── styles/global.css      # "Stratigraphy" design system
```

### Design system

We follow a custom **"Stratigraphy"** design language — earth-toned palette, layered "strata" banding between sections, Fraunces (variable serif) + Public Sans + JetBrains Mono. See [`src/styles/global.css`](src/styles/global.css) for tokens.

When proposing visual changes, please open an issue first so we can align on direction.

### Code style

- Astro + TypeScript (strict mode)
- Vanilla CSS with CSS custom properties — no Tailwind, no CSS-in-JS
- Keep components small and focused (< 50 lines when possible)
- Every interactive element should carry a stable `data-testid`
- Accessibility first: keep skip-links, ARIA labels, color contrast, and `prefers-reduced-motion` working

### Pull requests

1. Fork → branch from `main` (e.g., `feat/add-stonehenge`, `fix/map-marker-zindex`)
2. Run `yarn build` locally and confirm it succeeds
3. Open the PR with a clear description and screenshots if visual
4. A maintainer will review

---

## Code of conduct

Be kind, be curious, cite your sources. We're a community focused on opening archaeological knowledge — assume good faith, and remember that many contributors are students or independent researchers.

## Questions?

- 📨 [leslieantwi2@gmail.com](mailto:leslieantwi2@gmail.com)
- 🐛 [Open an issue](https://github.com/lesantwi/LesArch-1.1/issues/new)
- 📸 [@lesarch1.1 on Instagram](https://www.instagram.com/lesarch1.1)

---

— Leslie Antwi, *Founder · Digital and Computational Archaeology (M.A.), University of Cologne*
