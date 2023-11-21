// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'nuxt-svgo',
		'@nuxtjs/google-fonts'
	],
	svgo: {
		autoImportPath: './assets/svg/',
		defaultImport: 'component',
	},
	vite: {
		clearScreen: true,
		envDir: '.'
	},
	googleFonts: {
		display: 'swap',
		preconnect: true,
		families: {
			'Rubik': {
				wght: [400, 600],
				// ital: [400, 700],
			},
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		}
	},
	devtools: {
		enabled: true
	}
})
