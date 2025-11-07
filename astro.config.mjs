// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    site: 'https://minidoapp.com',
    output: 'server',
    adapter: awsAmplify()
});
