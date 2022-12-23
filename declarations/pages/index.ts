import { UContentAreaBlocks } from "../contentArea";
import { IImage } from "../shared/IImage";

export declare interface IPageHome {
	contentAreaCollection: UContentAreaBlocks[];
}

export declare interface IPageProject {
	contentAreaCollection: UContentAreaBlocks[];
	title: string;
	solutions: string[];
	seo: {
		description: string;
		image: IImage;
	};
	headerImage: IImage;
}
