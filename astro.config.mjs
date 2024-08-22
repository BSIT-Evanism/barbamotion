import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import UnoCSS from 'unocss/astro';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), react()],
  output: "server",
  adapter: vercel()
});