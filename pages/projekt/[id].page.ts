import gsap from "gsap";
import { IPageProject } from "~~/declarations/pages";
export default defineComponent({
	name: "ProjectDetails",
	setup: async () => {
		const { formatDate } = useFormatDate();
		const { params } = useRoute();
		const pageData = ref<IPageProject>();
		const refHeroImage = ref<HTMLElement>();

		onMounted(() => {
			if (refHeroImage.value) {
				gsap.from(refHeroImage.value, {
					opacity: 0,
					stagger: 0.15,
					translateY: "5rem",
				});
			}
		});

		useHead({
			title: () =>
				pageData.value?.title
					? pageData.value?.title + " | Jonatan Shoshan"
					: "Jonatan Shoshan - Webspecialist",
			meta: () => [{ name: "description", content: pageData.value?.seo.description }],
		});

		const { data } = await useFetch(`/api/pageProject/${params.id}`);
		if (!data.value?.success || !data.value?.data) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
			});
		}
		pageData.value = data.value?.data;

		return {
			data: pageData.value,
			formatDate,
			refHeroImage,
		};
	},
});
