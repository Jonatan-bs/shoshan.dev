import { IPageHome } from "~~/declarations/pages";

export default defineComponent({
	name: "HomePage",
	setup: async () => {
		const { formatDate } = useFormatDate();
		const { refHashElm, tempDeactiveateHashSetter } = useHashSetter();
		const modalContactIsActive = ref(false);
		const pageData = ref<IPageHome>();

		useSetHeader();

		const navItems = [
			{ title: "teknologier", to: "#teknologier" },
			{ title: "projekter", to: "#projekter" },
			{ title: "om mig", to: "#om-mig" },
			{ title: "tidslinje", to: "#tidslinje" },
			{ title: "kontakt", to: "#kontakt" },
		];

		const { data, error } = await useAsyncData(() => $fetch("/api/pageHome"));
		if (!data.value?.data || !data.value?.success || !data.value?.data || error.value) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
				data: data.value,
			});
		}
		pageData.value = data.value.data;

		return {
			modalContactIsActive,
			refHashElm,
			navItems,
			pageData,
			formatDate,
			tempDeactiveateHashSetter,
		};
	},
});
