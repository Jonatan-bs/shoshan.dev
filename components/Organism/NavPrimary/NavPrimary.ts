export default defineNuxtComponent({
	name: "NavPrimary",
	props: {
		items: {
			type: Array as () => { title: string; to: string }[],
		},
	},
	setup() {
		const selectedLine = ref<HTMLSpanElement | null>(null);
		const navItem = ref<HTMLLIElement[] | null>(null);
		const activeIndex = ref(0);

		const animateSelectedLine = () => {
			if (navItem.value && selectedLine.value) {
				const activeItem = navItem.value[activeIndex.value];
				const activeItemLeftPosition = activeItem.getBoundingClientRect().left;
				const activeItemWidth = activeItem.getBoundingClientRect().width;
				selectedLine.value.style.left = activeItemLeftPosition + "px";
				selectedLine.value.style.width = activeItemWidth + "px";
			}
		};

		watch(activeIndex, () => {
			animateSelectedLine();
		});
		onMounted(() => {
			animateSelectedLine();
			window.addEventListener("resize", animateSelectedLine);
		});
		onDeactivated(() => {
			window.removeEventListener("resize", animateSelectedLine);
		});

		return { selectedLine, activeIndex, navItem };
	},
});
