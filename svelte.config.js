import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : '/spanish-verbs'
		}
	}

};
