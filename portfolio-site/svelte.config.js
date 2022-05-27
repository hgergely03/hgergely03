import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: '@use "src/variables.scss" as *;'
		},
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
            // change below to your repo name
            base: dev ? "/" : "/hgergely03",
        },
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
		}
	}
};

export default config;
