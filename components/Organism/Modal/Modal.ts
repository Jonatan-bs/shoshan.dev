import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
export default defineNuxtComponent({
	name: "Modal",
	props: {
		isActive: Boolean,
		title: String,
	},
	setup(props, { emit }) {
		const refModal = ref<HTMLElement>();

		const { activate, deactivate } = useFocusTrap(refModal);

		const closeModalOnEscape = (e: KeyboardEvent) => {
			e.key === "Escape" ? emit("update:isActive", false) : "";
		};
		watch(
			() => props.isActive,
			async () => {
				// console.log(props.isActive, refModal.value);
				await nextTick();
				props.isActive ? activate() : deactivate();
				props.isActive
					? document.addEventListener("keydown", closeModalOnEscape)
					: document.removeEventListener("keydown", closeModalOnEscape);
			}
		);

		return { refModal };
	},
});
