import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: "index.html", // SPA mode
			strict: false, // ignore remaining dynamic route errors
		}),
		paths: {
			base: "", // leave empty unless hosting in subfolder
		},
	},
};

export default config;
