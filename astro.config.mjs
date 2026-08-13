import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Output static HTML (fast, free to host on GitHub Pages / Netlify / Vercel)
  // Only the LiveChat island needs JS at runtime.
  // GitHub Pages user page → no `base` needed (served at root of TwicePie.github.io)
  site: 'https://TwicePie.github.io',
  server: {
    host: true,
    port: 4321,
  },
});
