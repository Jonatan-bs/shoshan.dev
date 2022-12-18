import { PropType } from "nuxt/dist/app/compat/capi";

export default defineComponent({
	name: "TextHeading",
	props: {
		type: {
			type: String as PropType<"SECTION" | "H1" | "H2">,
			required: true,
		},
		tag: {
			type: String,
			default: "p",
		},
	},
});
