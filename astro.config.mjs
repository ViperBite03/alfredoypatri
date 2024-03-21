import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import db from '@astrojs/db'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), db()],
  output: 'server',
  adapter: vercel(),
})
