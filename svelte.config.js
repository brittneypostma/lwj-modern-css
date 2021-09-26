import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import node from '@sveltejs/adapter-node';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		},
		scss: {
			includePaths: ['src']
		}
	}),
	kit: {
		adapter: node(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/lib/components'),
					$layout: path.resolve('./src/lib/layout'),
					$utils: path.resolve('./src/lib/utils'),
					$posts: path.resolve('./src/posts'),
					$hooks: path.resolve('./src/lib/hooks'),
					$api: path.resolve('./src/lib/api'),
					$styles: path.resolve('./src/lib/styles'),
					$stores: path.resolve('./src/lib/stores')
				}
			}
		}
	}
};

export default config;
