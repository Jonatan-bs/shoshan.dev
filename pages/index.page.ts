export default defineComponent({
	name: "HomePage",
	setup: async () => {
		const { formatDate } = useFormatDate();
		const { refHashElm, tempDeactiveateHashSetter } = useHashSetter();

		const { data } = await useAsyncData(() => $fetch("/api/pageHome"));
		if (!data.value?.success || !data.value?.data) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
				data: data.value,
			});
		}
		const navItems = [
			{ title: "teknologier", to: "/#teknologier" },
			{ title: "portfolio", to: "/#projekter" },
			{ title: "om mig", to: "/#om-mig" },
			{ title: "tidslinje", to: "/#tidslinje" },
			{ title: "kontakt", to: "/#kontakt" },
		];
		return {
			refHashElm,
			navItems,
			data: data.value.data,
			formatDate,
			tempDeactiveateHashSetter,
		};
	},
});
