export default defineNuxtComponent({
	name: "GlowBall",
	// props: {
	// 	// isActive: Boolean,
	// },
	setup() {
		const isActive = ref(false);
		return { isActive };
	},
});
