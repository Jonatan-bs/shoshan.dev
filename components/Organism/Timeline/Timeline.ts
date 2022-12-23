import gsap from "gsap";
import { IBlockTimeline } from "~~/declarations/contentArea";

export default defineNuxtComponent({
	name: "Timeline",
	props: {
		entries: Array as () => IBlockTimeline["entries"],
	},
	setup() {
		const { formatDate } = useFormatDate();

		const refAnimateFromBottom = ref<HTMLElement[] | null>(null);

		const refLineWrapper = ref<SVGElement[] | null>(null);
		const activeGlowBallIndexes = ref<number>(-1);

		watch(activeGlowBallIndexes, (currentValue, oldValue) => {
			if (!refAnimateFromBottom.value) return;
			const animateFromRightwrapper = refAnimateFromBottom.value[currentValue];
			const animateFromRightwrapperNextElm = refAnimateFromBottom.value[oldValue];

			const fromAnimation = {
				opacity: 0,
				transform: "translateY(5rem)",
			};
			const toAnimation = {
				stagger: 0.15,
				opacity: 1,
				duration: 0.5,
				transform: "translateX(0rem)",
			};
			if (currentValue < oldValue && animateFromRightwrapperNextElm) {
				gsap.fromTo(
					animateFromRightwrapperNextElm.querySelectorAll(":scope > *"),
					toAnimation,
					fromAnimation
				);
			} else if (currentValue > oldValue && animateFromRightwrapper) {
				gsap.fromTo(
					animateFromRightwrapper.querySelectorAll(":scope > *"),
					fromAnimation,
					toAnimation
				);
			}
		});

		onMounted(async () => {
			await nextTick();

			refAnimateFromBottom.value &&
				refAnimateFromBottom.value.forEach((elmWrapper: HTMLElement) => {
					elmWrapper.querySelectorAll<HTMLElement>(":scope > *").forEach((elm) => {
						elm.style.opacity = "0";
					});
				});

			// Animate line
			if (refLineWrapper.value) {
				refLineWrapper.value.forEach((lineWrapper) => {
					gsap.timeline({
						defaults: { duration: 1 },
						scrollTrigger: {
							trigger: lineWrapper,
							scrub: 1,
							start: "top 60%",
							end: "bottom 60%",
							onEnter: () => {
								if (activeGlowBallIndexes.value === -1)
									activeGlowBallIndexes.value++;
							},
							onEnterBack: () => {
								activeGlowBallIndexes.value--;
							},
							onLeave: function () {
								activeGlowBallIndexes.value++;
							},
							onLeaveBack: function () {
								if (activeGlowBallIndexes.value === 0)
									activeGlowBallIndexes.value--;
							},
						},
					}).fromTo(
						lineWrapper.querySelectorAll("svg"),
						{
							height: "0%",
						},
						{
							height: "100%",
						}
					);
				});
			}
		});
		return {
			refLineWrapper,
			activeGlowBallIndexes,
			formatDate,
			refAnimateFromBottom,
		};
	},
});
