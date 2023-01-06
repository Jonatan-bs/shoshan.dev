/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
	IBlockAbout,
	IBlockImage,
	IBlockProjectsSection,
	IBlockServices,
	IBlockTimeline,
} from "~~/declarations/contentArea";
import {
	BlockAboutFragment,
	BlockImageFragment,
	BlockProjectsSectionFragment,
	BlockServicesFragment,
	BlockTimelineFragment,
} from "~~/operations-types";
import { useTools } from "./useTools";

export const useMapApiData = () => {
	const { notEmpty } = useTools();
	const MAPContentAreaCollection = (
		collectionItems: (
			| BlockAboutFragment
			| BlockImageFragment
			| BlockProjectsSectionFragment
			| BlockServicesFragment
			| BlockTimelineFragment
			| undefined
			| null
		)[]
	) => {
		return collectionItems.filter(notEmpty).map((entry) => {
			switch (entry?.__typename) {
				case "BlockAbout":
					return MAPBlockAbout(entry);
				case "BlockImage":
					return MAPBlockImage(entry);
				case "BlockProjectsSection":
					return MAPBlockProjectsSection(entry);
				case "BlockServices":
					return MAPBlockServices(entry);
				case "BlockTimeline":
					return MAPBlockTimeline(entry);
			}
		});
	};
	const MAPBlockAbout = (blockAbout: BlockAboutFragment): IBlockAbout => {
		return {
			about: blockAbout.about || "",
			name: blockAbout.name || "",
			subheading: blockAbout.subheading || "",
			title: blockAbout.title || "",
			image: {
				alt: blockAbout.image!.description || "",
				url: blockAbout.image!.url!,
			},
			__typename: blockAbout.__typename,
		};
	};
	const MAPBlockImage = (blockImage: BlockImageFragment): IBlockImage => {
		return {
			image: {
				alt: blockImage.image!.description || "",
				url: blockImage.image!.url!,
			},
			__typename: blockImage.__typename,
		};
	};
	const MAPBlockProjectsSection = (
		blockProjectsSection: BlockProjectsSectionFragment
	): IBlockProjectsSection => {
		return {
			title: blockProjectsSection.title || "",
			projects:
				blockProjectsSection.projectsCollection?.items.filter(notEmpty).map((project) => {
					return {
						title: project!.title || "",
						teaserImage: {
							alt: project!.teaserImage!.description || "",
							url: project!.teaserImage!.url!,
						},
						solutions: project!.solutions?.filter(notEmpty) || [],
						__typename: blockProjectsSection.__typename,
						slug: project.seo!.slug!,
						id: project.sys.id,
					};
				}) || [],
			__typename: blockProjectsSection.__typename,
		};
	};
	const MAPBlockServices = (blockServices: BlockServicesFragment): IBlockServices => {
		return {
			title: blockServices.title || "",
			images:
				blockServices.imageCollection?.items.map((image) => {
					return {
						url: image!.url!,
						alt: image!.description || "",
					};
				}) || [],
			__typename: blockServices.__typename,
		};
	};
	const MAPBlockTimeline = (blockTimeline: BlockTimelineFragment): IBlockTimeline => {
		return {
			title: blockTimeline.title || "",
			__typename: blockTimeline.__typename,
			entries:
				blockTimeline.enitriesCollection?.items.filter(notEmpty).map((blockTimeline) => {
					return {
						description: blockTimeline.description || "",
						fromDate: (blockTimeline.fromDate as string) || "",
						toDate: (blockTimeline.toDate as string) || "",
						title: blockTimeline.title || "",
						image: {
							alt: blockTimeline.image!.description || "",
							url: blockTimeline.image!.url || "",
						},
						overwriteToDateWithNow: blockTimeline.overwriteToDateWithNow || false,
						subHeading: blockTimeline.subHeading || "",
					};
				}) || [],
		};
	};

	return { MAPContentAreaCollection };
};
