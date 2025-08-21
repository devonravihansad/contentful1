import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: [
			"370f35a0-228f-46fa-ba45-68096e555006-00-vrglenih859c.sisko.replit.dev",
		],
	},
});
