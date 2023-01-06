import gsap from "gsap";
import { IPageProject } from "~~/declarations/pages";
export default defineComponent({
	name: "ProjectDetails",
	setup: async () => {
		const { formatDate } = useFormatDate();
		const { params } = useRoute();
		const pageData = ref<IPageProject>();
		const titleChunk = ref<string>();
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

		watch(pageData, () => {
			useSetHeader({
				description: pageData.value?.seo.description,
				imageUrl: pageData.value?.seo.image.url,
				titleChunk: pageData.value?.title,
			});
		});

		const { data } = await useFetch(`/api/pageProject/${params.slug}`);
		if (!data.value || !data.value?.success || !data.value?.data) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
			});
		}

		pageData.value = data.value?.data;
		titleChunk.value = pageData.value?.title;

		return {
			pageData: pageData.value,
			formatDate,
			refHeroImage,
		};
	},
});
