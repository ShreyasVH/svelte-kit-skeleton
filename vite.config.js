import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: process.env.VITE_HOST,
		port: process.env.VITE_PORT
	}
});
