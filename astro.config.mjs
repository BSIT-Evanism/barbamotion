import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    react(),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
