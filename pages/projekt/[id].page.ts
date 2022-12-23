export default defineComponent({
	name: "ProjectDetails",
	setup: async () => {
		const { formatDate } = useFormatDate();
		const { params } = useRoute();

		const { data } = await useAsyncData(() => $fetch(`/api/pageProject/${params.id}`));

		if (!data.value?.success || !data.value?.data) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
			});
		}
		// useHead({
		// 	title: data.value.data.title + "| Jonatan Shoshan",
		// 	meta: [{ name: "description", content: data.value.data.seo.description }],
		// });

		return {
			data: data.value.data,
			formatDate,
		};
	},
});
