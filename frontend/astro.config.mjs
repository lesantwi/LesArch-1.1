// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: When deploying to https://lesantwi.github.io/LesArch-1.1/
// `site` is the origin and `base` is the sub-path.
const SITE = 'https://lesantwi.github.io';
const BASE = '/LesArch-1.1';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    server: {
      allowedHosts: ['.preview.emergentcf.cloud', '.preview.emergentagent.com', 'localhost'],
      hmr: { clientPort: 443 },
    },
  },
});
