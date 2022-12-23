import { IImage } from "./shared/IImage";

export declare type UContentAreaBlocks =
	| IBlockAbout
	| IBlockImage
	| IBlockProjectsSection
	| IBlockServices
	| IBlockTimeline
	| undefined;

export declare interface IBlockAbout {
	about: string;
	name: string;
	subheading: string;
	title: string;
	image: IImage;
	__typename: "BlockAbout";
}

export declare interface IBlockImage {
	image: IImage;
	__typename: "BlockImage";
}
export declare interface IBlockProjectsSection {
	title: string;
	projects: {
		title: string;
		teaserImage: IImage;
		solutions: string[];
		slug: string;
		id: string;
	}[];
	__typename: "BlockProjectsSection";
}
export declare interface IBlockServices {
	title: string;
	images: IImage[];
	__typename: "BlockServices";
}
export declare interface IBlockTimeline {
	title: string;
	__typename: "BlockTimeline";
	entries: {
		description: string;
		fromDate: string;
		toDate: string;
		title: string;
		image: IImage;
		overwriteToDateWithNow: boolean;
		subHeading: string;
	}[];
}
