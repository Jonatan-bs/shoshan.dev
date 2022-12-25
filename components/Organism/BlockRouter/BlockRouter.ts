import { UContentAreaBlocks } from "~~/declarations/contentArea";
import gsap from "gsap";

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
		const refTechnologyCard = ref<HTMLElement[]>();
		const refTechnologyCardScrollTrigger = ref<HTMLElement>();
		const refProjectCard = ref<HTMLElement[]>();
		const refProjectCardScrollTrigger = ref<HTMLElement>();

		const refAboutSectionScrollTrigger = ref<HTMLElement>();
		const refAboutSectionText = ref<HTMLElement[]>();
		const refAboutSectionImage = ref<HTMLElement>();

		const refImageBlockScrollTrigger = ref<HTMLElement>();
		const refImageBlock = ref<HTMLElement | HTMLElement[]>();
		const { fadeUp } = useAnimation();

		onMounted(() => {
			if (refProjectCard.value && refProjectCardScrollTrigger.value) {
				fadeUp(refProjectCard.value, refProjectCardScrollTrigger.value);
			}
			if (refTechnologyCard.value && refTechnologyCardScrollTrigger.value) {
				fadeUp(refTechnologyCard.value, refTechnologyCardScrollTrigger.value);
			}
			if (refAboutSectionImage.value && refAboutSectionScrollTrigger.value) {
				fadeUp(refAboutSectionImage.value, refAboutSectionScrollTrigger.value);
			}
			if (refAboutSectionText.value && refAboutSectionScrollTrigger.value) {
				fadeUp(refAboutSectionText.value, refAboutSectionScrollTrigger.value);
			}
			if (refImageBlock.value && refImageBlockScrollTrigger.value) {
				fadeUp(refImageBlock.value, refImageBlockScrollTrigger.value);
			}
		});

		const { refHashElm } = useHashSetter(!props.setHashIds);

		return {
			refHashElm,
			createId,
			refTechnologyCard,
			refTechnologyCardScrollTrigger,
			refProjectCard,
			refProjectCardScrollTrigger,
			refAboutSectionScrollTrigger,
			refAboutSectionText,
			refAboutSectionImage,
			refImageBlock,
			refImageBlockScrollTrigger,
		};
	},
});
