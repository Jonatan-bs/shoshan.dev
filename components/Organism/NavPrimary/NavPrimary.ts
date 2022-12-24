import emitter from "tiny-emitter/instance";
export default defineNuxtComponent({
	name: "NavPrimary",
	props: {
		items: {
			type: Array as () => { title: string; to: string }[],
			required: true,
		},
	},
	setup(props) {
		const route = useRoute();
		const { tempDeactiveateHashSetter } = useHashSetter();
		const selectedLine = ref<HTMLSpanElement | null>(null);
		const navItem = ref<HTMLLIElement[] | null>(null);
		const activeValue = ref<string>("");
		emitter.on("hashChanged", (hash: string) => {
			activeValue.value = hash;
		});
		const setActiveIndexByValue = (value: string) => {
			tempDeactiveateHashSetter();
			activeValue.value = value.replace("/", "");
		};
		const animateSelectedLine = () => {
			if (navItem.value && selectedLine.value) {
				const activeItemIndex = props.items.findIndex(
					(item) => item.to === "/" + activeValue.value
				);
				if (activeItemIndex === -1) return;

				const activeItemLeftPosition =
					navItem.value[activeItemIndex].getBoundingClientRect().left;
				const activeItemWidth =
					navItem.value[activeItemIndex].getBoundingClientRect().width;
				selectedLine.value.style.left = activeItemLeftPosition + "px";
				selectedLine.value.style.width = activeItemWidth + "px";
			}
		};

		watch(activeValue, () => {
			animateSelectedLine();
		});
		onMounted(() => {
			activeValue.value = route.hash;
			animateSelectedLine();
			window.addEventListener("resize", animateSelectedLine);
		});
		onDeactivated(() => {
			window.removeEventListener("resize", animateSelectedLine);
		});

		return { selectedLine, activeValue, navItem, setActiveIndexByValue };
	},
});
