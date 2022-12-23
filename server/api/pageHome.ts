/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IResponseModel } from "~~/declarations/apiResponse";
import { IPageHome } from "~~/declarations/pages/PageHome";
import { PageHomeDocument, PageHomeQuery } from "~~/operations-types";
import { useCmsClient } from "~~/composables/cmsClient";
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
	return value !== null && value !== undefined;
}

export default defineEventHandler(async (): Promise<IResponseModel<null | IPageHome>> => {
	let data: PageHomeQuery["pageHomeCollection"] = null;

	const { cmsClient } = useCmsClient();
	try {
		const response = await cmsClient.request(PageHomeDocument);
		response.pageHomeCollection;
		data = response.pageHomeCollection || null;
	} catch (err) {
		return {
			success: false,
			data: null,
			message: err,
		};
	}

	const mappedData: IPageHome = {
		contentAreaCollection: data?.items[0]?.contentAreaCollection?.items
			? data?.items[0]?.contentAreaCollection?.items.filter(notEmpty).map((entry) => {
					switch (entry?.__typename) {
						case "BlockAbout":
							return {
								about: entry.about || "",
								name: entry.name || "",
								subheading: entry.subheading || "",
								title: entry.title || "",
								image: {
									alt: entry.image!.description || "",
									url: entry.image!.url!,
								},
								__typename: entry.__typename,
							};
						case "BlockImage":
							return {
								image: {
									alt: entry.image!.description || "",
									url: entry.image!.url!,
								},
								__typename: entry.__typename,
							};
						case "BlockProjectsSection":
							return {
								title: entry.title || "",
								projects:
									entry.projectsCollection?.items
										.filter(notEmpty)
										.map((project) => {
											return {
												title: project!.title || "",
												teaserImage: {
													alt: project!.teaserImage!.description || "",
													url: project!.teaserImage!.url!,
												},
												solutions:
													project!.solutions?.filter(notEmpty) || [],
												__typename: entry.__typename,
											};
										}) || [],
								__typename: entry.__typename,
							};
						case "BlockServices":
							return {
								title: entry.title || "",
								images:
									entry.imageCollection?.items.map((image) => {
										return {
											url: image!.url!,
											alt: image!.description || "",
										};
									}) || [],
								__typename: entry.__typename,
							};
						case "BlockTimeline":
							return {
								title: entry.title || "",
								__typename: entry.__typename,
								entries:
									entry.enitriesCollection?.items
										.filter(notEmpty)
										.map((entry) => {
											return {
												description: entry.description || "",
												fromDate: (entry.fromDate as string) || "",
												toDate: (entry.fromDate as string) || "",
												title: entry.title || "",
												image: {
													alt: entry.image!.description || "",
													url: entry.image!.url || "",
												},
												overwriteToDateWithNow:
													entry.overwriteToDateWithNow || false,
												subHeading: entry.subHeading || "",
											};
										}) || [],
							};
					}
			  })
			: [],
	};

	return {
		success: true,
		data: mappedData,
		message: null,
	};
});
