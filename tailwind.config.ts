import plugin from "tailwindcss/plugin";

module.exports = {
	mode: "jit",
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			keyframes: {
				rotate: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
			},

			animation: {
				rotate: "rotate  1s linear infinite",
			},
		},
		letterSpacing: {
			normal: "0",
			wide: ".6rem",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				"2xl": "14rem",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1640px",
			"4xl": "1920px",
		},
		strokeWidth: {
			"5": ".5rem",
		},
		colors: {
			transparent: "transparent",
			// WHITE
			white: "#FFFFFF",

			// BLACKS
			black: "#000000",
			"black-lacquer": "#403E3E",

			// BLUE
			"blue-cornflower": "#162434",
			"blue-neon": "#00b2ff",
			"blue-green-neon": "#00ffbb",
			"blue-light-house": "#6e86a2",

			// GREEN
			"green-neon": "#6bff6b",

			// GREYS
			"grey-cascading-white": "#F6F6F6",

			// YELLOWs
			"yellow-energy-yellow": "#F5D653",
		},
		fontFamily: {
			sans: ["Lato", "sans-serif"],
		},
		spacing: {
			"4xs": ".7rem",
			"3xs": "1rem",
			"2xs": "1.6rem",
			xs: "2rem",
			sm: "3rem",
			md: "4rem",
			lg: "7rem",
			xl: "20rem",
			"2xl": "35rem",
			"3xl": "45rem",
		},

		fontSize: {
			xs: "1.3rem",
			sm: "1.5rem",
			base: "2.1rem",
			md: "2.6rem",
			lg: "3rem",
			xl: "4.9rem",
			"2xl": "7rem",
		},
		fontWeight: {
			light: 300,
			normal: 400,
			bold: 700,
			black: 900,
		},
		borderRadius: {
			none: "0",
			sm: "1.6rem",
			lg: "15.5rem",
			full: "999rem",
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
