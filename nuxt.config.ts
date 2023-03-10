// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	nitro: {
		preset: "vercel",
	},
	build: {
		transpile: ["gsap"],
	},
	runtimeConfig: {
		public: {
			CONTENTFULL_BASE_URL: process.env.CONTENTFULL_BASE_URL,
			VITE_GQL_HOST: process.env.VITE_GQL_HOST,
			VITE_GQL_TOKEN: process.env.VITE_GQL_TOKEN,
			ROBOTS: process.env.ROBOTS,
			BASE_URL: process.env.BASE_URL,
		},
	},
	css: ["~/assets/styles/main.scss"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "~/modules/robots", "~/modules/router"],
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/assets/svg", extensions: ["vue"], prefix: "svg" },
	],
	image: {
		contentful: {
			baseURL: process.env.CONTENTFULL_BASE_URL,
		},
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1640,
			"4xl": 1920,
		},
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },

		head: {
			htmlAttrs: { lang: "da" },
			link: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "use-credentials",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
				},
			],
		},
	},
});
