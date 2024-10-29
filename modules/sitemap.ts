import { writeFileSync } from 'fs';
import { defineNuxtModule } from '@nuxt/kit';
import xml from 'xml';

interface Page {
  id: number;
  link: string;
  updated_at: string | null;
}

export default defineNuxtModule({
  meta: {
    name: 'sitemap',
    configKey: 'sitemap',
  },

  defaults: {
    declaration: '<?xml version="1.0" encoding="UTF-8"?>',
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  },

  setup(options, nuxt) {
    nuxt.hook('nitro:build:public-assets', async (nitroConfig) => {
      if (nitroConfig.options.dev) return;

      const response = await fetch('https://example.com');
      const pages = await response.json();

      const sitemapItems = pages.data.map((page: Page) => {
        return {
          url: [
            { loc: page.link },
            { lastmod: page.updated_at ? new Date(page.updated_at).toISOString() : new Date().toISOString() },
          ],
        };
      });

      const sitemap = options.declaration + xml({ urlset: sitemapItems });

      writeFileSync(
        `${nuxt.options.rootDir}/.vercel/output/static/sitemap.xml`,
        sitemap
      );
    });
  },
});
