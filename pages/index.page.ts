import { PageHomeDocument } from "~~/operations-types";
import { cmsClient } from "~~/ressources/cmsClient";

export default defineComponent({
	name: "HomePage",
	setup() {
		const navItems = [
			{ title: "portfolio", to: "#" },
			{ title: "om mig", to: "#" },
			{ title: "teknologier", to: "#" },
			{ title: "anbefalinger", to: "#" },
			{ title: "kontakt", to: "#" },
		];
		onMounted(async () => {
			try {
				const data = await cmsClient.request(PageHomeDocument);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		});
		return { navItems };
	},
});
