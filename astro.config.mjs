import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

const enableKeystatic = !process.env.SKIP_KEYSTATIC;

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    react(),
    markdoc(),
    ...(enableKeystatic ? [keystatic()] : []),
  ],
  output: "static",
  compressHTML: true,
});
