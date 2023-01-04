import { marked } from "marked";

export default defineNuxtComponent({
	name: "Markdown",
	props: {
		value: { type: String, required: true },
	},
	setup(props) {
		const parse = (value: string) => {
			return marked.parse(value);
		};
		return { parse };
	},
});
