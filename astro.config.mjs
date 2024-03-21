import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import db from '@astrojs/db'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), db()],
  output: 'server',
  adapter: cloudflare(),
})
