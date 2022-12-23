import { UContentAreaBlocks } from "~~/declarations/contentArea";

export default defineNuxtComponent({
	name: "blockRouter",
	props: {
		contentAreaCollection: Array as () => UContentAreaBlocks[],
	},
});
