import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://SergioMorenoAntequera.github.io',
  base: '/MyBlog',
  server: { port: 1234, host: true},
  integrations: [mdx(), sitemap(), react(), tailwind()]
});