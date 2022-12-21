export default defineNuxtComponent({
	name: "BaseList",
	props: {
		items: { type: Array as () => (string | null)[], required: true },
	},
});
