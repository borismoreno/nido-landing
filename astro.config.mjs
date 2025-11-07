// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx()],
    site: 'https://master.dfwmcx7ncrse1.amplifyapp.com',
    output: 'server',
    adapter: awsAmplify()
});
