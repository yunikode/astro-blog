import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	renderers: ['@astrojs/renderer-react'],
	buildOptions: {
		site: 'https://example.com/',
	},
});
