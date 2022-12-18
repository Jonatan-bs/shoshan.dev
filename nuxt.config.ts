// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ["~/assets/styles/main.scss"],
	modules: ["@nuxtjs/tailwindcss"],
	components: [
		{ path: "~/components", extensions: ["vue"] },
		{ path: "~/assets/svg", extensions: ["vue"], prefix: "svg" },
	],
	app: {
		head: {
			title: "Jonatan Shoshan - Webspecialist",
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
					href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap",
				},
			],
		},
	},
});
