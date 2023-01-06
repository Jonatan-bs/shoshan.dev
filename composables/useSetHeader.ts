export const useSetHeader = (data?: {
	titleChunk?: string;
	description?: string;
	imageUrl?: string;
}) => {
	const { seoTitleTemplate, seoDescription, seoImage, seoTitle } = useGlobalData();

	const title = computed(() =>
		data?.titleChunk ? data.titleChunk + seoTitleTemplate.value || "" : seoTitle.value || ""
	);

	const description = computed(() => data?.description || seoDescription.value || "");

	const image = computed(() => data?.imageUrl || seoImage.value?.url || "");

	useHead({
		title: () => title.value,
		meta: () => [
			{ name: "description", content: seoDescription.value || "" },
			{
				hid: "og-title",
				property: "og:title",
				content: title.value,
			},
			{
				hid: "og-desc",
				property: "og:description",
				content: description.value,
			},
			{
				hid: "og-image",
				property: "og:image",
				content: image.value,
			},
			{ hid: "t-type", name: "twitter:card", content: "summary_large_image" },
			{ hid: "og-type", property: "og:type", content: "website" },
		],
	});
};
