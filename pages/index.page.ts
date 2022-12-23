export default defineComponent({
	name: "HomePage",
	setup: async () => {
		const { formatDate } = useFormatDate();

		const { data } = await useAsyncData(() => $fetch("/api/pageHome"));
		if (!data.value?.success || !data.value?.data) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
			});
		}

		return {
			data: data.value.data,
			formatDate,
		};
	},
});
