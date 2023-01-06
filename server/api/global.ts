/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IResponseModel } from "~~/declarations/apiResponse";
import { IGlobal } from "~~/declarations/pages";
import { GlobalDocument, GlobalQuery } from "~~/operations-types";
import { useCmsClient } from "~~/composables/cmsClient";

export default defineEventHandler(async (): Promise<IResponseModel<null | IGlobal>> => {
	let data: NonNullable<GlobalQuery["globalCollection"]>["items"][0] = null;
	const { cmsClient } = useCmsClient();

	try {
		const response = await cmsClient.request(GlobalDocument);
		data = response.globalCollection?.items[0] || null;
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
	const mappedData: IGlobal = {
		seoDescription: data.seoDescription || "",
		seoTitle: data.seoTitle || "",
		seoTitleTemplate: data.seoTitleTemplate || "",
		seoImage: {
			alt: data.seoImage?.description || "",
			url: data.seoImage?.url || "",
		},
	};

	return {
		success: true,
		data: mappedData,
		message: null,
		status: 200,
	};
});
