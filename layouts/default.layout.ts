export default defineNuxtComponent({
	name: "defaultLayout",
	setup() {
		const navItems = [
			{ title: "teknologier", to: "/#BlockServices0" },
			{ title: "portfolio", to: "/#BlockProjectsSection1" },
			{ title: "om mig", to: "/#BlockAbout2" },
			// { title: "anbefalinger", to: "/#" },
			{ title: "tidslinje", to: "/#BlockTimeline3" },
			{ title: "kontakt", to: "/#contact" },
		];
		return { navItems };
	},
});
