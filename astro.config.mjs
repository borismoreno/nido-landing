// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    site: 'https://minidoapp.com',
    adapter: node({ mode: 'standalone' })
});
