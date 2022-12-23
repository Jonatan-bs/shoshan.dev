import { IPageHome } from "~~/declarations/pages/PageHome";

export default defineComponent({
	name: "HomePage",
	setup() {
		const { formatDate } = useFormatDate();
		const data = ref<IPageHome | null>(null);
		const navItems = [
			{ title: "portfolio", to: "#" },
			{ title: "om mig", to: "#" },
			{ title: "teknologier", to: "#" },
			{ title: "anbefalinger", to: "#" },
			{ title: "kontakt", to: "#" },
		];

		onMounted(async () => {
			const response = await $fetch("/api/pageHome");
			data.value = response.data;
		});
		return {
			navItems,
			data,

			formatDate,
		};
	},
});
