/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IResponseModel } from "~~/declarations/apiResponse";
import { IPageHome } from "~~/declarations/pages";
import { PageHomeDocument, PageHomeQuery } from "~~/operations-types";
import { useCmsClient } from "~~/composables/cmsClient";
import { useMapApiData } from "~~/composables/useMapApiData";

export default defineEventHandler(async (): Promise<IResponseModel<null | IPageHome>> => {
	let data: PageHomeQuery["pageHomeCollection"] = null;
	const { cmsClient } = useCmsClient();
	const { MAPContentAreaCollection } = useMapApiData();

	try {
		const response = await cmsClient.request(PageHomeDocument);
		data = response.pageHomeCollection || null;
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
	const mappedData: IPageHome = {
		contentAreaCollection:
			data?.items[0]?.contentAreaCollection?.items != null
				? MAPContentAreaCollection(data?.items[0]?.contentAreaCollection?.items)
				: [],
	};

	return {
		success: true,
		data: mappedData,
		message: null,
		status: 200,
	};
});
