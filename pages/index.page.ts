import { PageHomeDocument, PageHomeQuery } from "~~/operations-types";

export default defineComponent({
	name: "HomePage",
	setup() {
		const data = ref<PageHomeQuery["pageHomeCollection"] | null>(null);
		const navItems = [
			{ title: "portfolio", to: "#" },
			{ title: "om mig", to: "#" },
			{ title: "teknologier", to: "#" },
			{ title: "anbefalinger", to: "#" },
			{ title: "kontakt", to: "#" },
		];
		onMounted(async () => {
			const { cmsClient } = useCmsClient();
			try {
				const response = await cmsClient.request(PageHomeDocument);
				response.pageHomeCollection;
				data.value = response.pageHomeCollection || null;
			} catch (err) {
				console.log(err);
			}
		});
		return { navItems, data };
	},
});
