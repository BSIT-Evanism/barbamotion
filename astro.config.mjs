import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import UnoCSS from 'unocss/astro';
import { presetUno} from 'unocss';
import react from "@astrojs/react";


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    presets: [presetUno()],
    injectReset: true
  }), react()],
  output: "server",
  adapter: vercel()
});
