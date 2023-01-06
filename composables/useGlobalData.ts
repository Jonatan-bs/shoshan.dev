import { IImage } from "~~/declarations/shared/IImage";

const seoTitleTemplate = ref<string>();
const seoTitle = ref<string>();
const seoDescription = ref<string>();
const seoImage = ref<IImage>();

export const useGlobalData = () => {
	const setGlobalData = async () => {
		if (seoTitleTemplate.value || seoTitle.value || seoDescription.value || seoImage.value) {
			return { seoTitleTemplate, seoTitle, seoDescription, seoImage, setGlobalData };
		}

		const { data, error } = await useFetch(`/api/global`);

		if (!data.value?.success || !data.value?.data || error.value) {
			throw createError({
				statusCode: data.value?.status || 500,
				statusMessage:
					data.value?.status === 404 ? "Page Not Found" : "Something went wrong",
			});
		}
		seoTitleTemplate.value = data.value?.data?.seoTitleTemplate;
		seoTitle.value = data.value?.data?.seoTitle;
		seoDescription.value = data.value?.data?.seoDescription;
		seoImage.value = data.value?.data?.seoImage;
	};

	return { seoTitleTemplate, seoTitle, seoDescription, seoImage, setGlobalData };
};
