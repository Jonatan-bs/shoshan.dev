/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IResponseModel } from "~~/declarations/apiResponse";
import { IPageProject } from "~~/declarations/pages";
import { PageProjectDocument, PageProjectQuery } from "~~/operations-types";
import { useCmsClient } from "~~/composables/cmsClient";
import { useMapApiData } from "~~/composables/useMapApiData";
import { useTools } from "~~/composables/useTools";

export default defineEventHandler(async (event): Promise<IResponseModel<IPageProject>> => {
	let data: NonNullable<PageProjectQuery["projectCollection"]>["items"][0] = null;
	const slug = event.context.params.slug;
	const { MAPContentAreaCollection } = useMapApiData();
	const { notEmpty } = useTools();

	const { cmsClient } = useCmsClient();
	try {
		const response = await cmsClient.request(PageProjectDocument, { slug });
		data = response.projectCollection?.items[0] || null;
	} catch (err: any) {
		return {
			success: false,
			data: null,
			message: err,
			status: err?.response?.status || 500,
		};
	}
	if (!data) {
		return {
			success: true,
			data: null,
			message: null,
			status: 404,
		};
	}

	const mappedData: IPageProject = {
		title: data.title || "",
		solutions: data?.solutions?.filter(notEmpty) || [],
		seo: {
			description: data.seo?.description || "",
			image: {
				alt: data.seo?.image?.description || "",
				url: data.seo?.image?.url || "",
			},
		},
		headerImage: {
			alt: data.headerImage?.description || "",
			url: data.headerImage?.url || "",
		},

		contentAreaCollection:
			data?.contentAreaCollection?.items != null
				? MAPContentAreaCollection(data?.contentAreaCollection?.items)
				: [],
	};

	return {
		success: true,
		data: mappedData,
		message: null,
		status: 200,
	};
});
