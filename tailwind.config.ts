import plugin from "tailwindcss/plugin";

module.exports = {
	theme: {
		letterSpacing: {
			normal: "0",
			wide: ".6rem",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				xl: "14rem",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
			"3xl": "1920px",
		},
		colors: {
			// BLACKS
			"black-lacquer": "#403E3E",

			// GREYS
			"grey-cascading-white": "#F6F6F6",
			"grey-robo-master": "#ADADAD",

			// YELLOWs
			"yellow-energy-yellow": "#F5D653",
		},
		fontFamily: {
			sans: ["Lato", "sans-serif"],
		},
		spacing: {
			"2xs": "1.6rem",
			xs: "2rem",
			sm: "3rem",
			md: "4rem",
			lg: "7rem",
			xl: "20rem",
			"2xl": "35rem",
			"3xl": "59rem",
		},

		fontSize: {
			xs: "1.2rem",
			sm: "1.5rem",
			base: "2.1rem",
			md: "2.6rem",
			lg: "3rem",
			xl: "4.9rem",
			"2xl": "7rem",
		},
		fontWeights: {
			light: 300,
			normal: 400,
			bold: 700,
			black: 900,
		},
		borderRadius: {
			none: "0",
			sm: "1.6rem",
			lg: "15.5rem",
		},
		aspectRatio: {
			"1": "1",
			"5/4": "5 / 4",
		},
	},

	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".main-grid": {
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					columnGap: "1.6rem",
					rowGap: "1.6rem",
				},
			});
		}),
	],
};
