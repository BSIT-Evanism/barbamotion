import { defineConfig } from 'astro/config';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({ injectReset: true }), sentry(), spotlightjs()],
});