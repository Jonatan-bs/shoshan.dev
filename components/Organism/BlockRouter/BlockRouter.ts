import { UContentAreaBlocks } from "~~/declarations/contentArea";

export default defineNuxtComponent({
	name: "blockRouter",
	props: {
		contentAreaCollection: Array as () => UContentAreaBlocks[],
		setHashIds: Boolean,
	},
	setup(props) {
		const createId = (id: string) => {
			return id.replace(" ", "-").toLowerCase();
		};

		const { refHashElm } = useHashSetter(!props.setHashIds);

		return { refHashElm, createId };
	},
});
