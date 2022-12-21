import { PageHomeDocument, PageHomeQuery } from "~~/operations-types";
import gsap from "gsap";

export default defineComponent({
	name: "HomePage",
	setup() {
		const data = ref<PageHomeQuery["pageHomeCollection"] | null>(null);
		const navItems = [
			{ title: "portfolio", to: "#" },
			{ title: "om mig", to: "#" },
			{ title: "teknologier", to: "#" },
			{ title: "anbefalinger", to: "#" },
			{ title: "kontakt", to: "#" },
		];
		const refLineWrapper = ref<SVGElement[] | null>(null);
		const activeGlowBallIndexes = ref<number[]>([]);

		watch(activeGlowBallIndexes, () => {
			console.log(activeGlowBallIndexes.value);
		});

		onMounted(async () => {
			const { cmsClient } = useCmsClient();
			try {
				const response = await cmsClient.request(PageHomeDocument);
				response.pageHomeCollection;
				data.value = response.pageHomeCollection || null;
			} catch (err) {
				console.log(err);
			}

			await nextTick();
			// Animate line
			if (refLineWrapper.value) {
				refLineWrapper.value.forEach((lineWrapper, index) => {
					gsap.timeline({
						defaults: { duration: 1 },
						scrollTrigger: {
							markers: false,
							trigger: lineWrapper,
							scrub: 1,
							start: "top 60%",
							end: "bottom 60%",
							onEnter: () => {
								const indexPosition = activeGlowBallIndexes.value.indexOf(index);
								if (indexPosition === -1) {
									activeGlowBallIndexes.value?.push(index);
								}
							},
							onEnterBack: () => {
								console.log("enter back");
							},
							onLeave: function () {
								console.log("onLeave");
								const indexPosition = activeGlowBallIndexes.value.indexOf(
									index + 1
								);
								if (indexPosition === -1) {
									activeGlowBallIndexes.value?.push(index + 1);
								}
							},
							onLeaveBack: function () {
								console.log("onLeaveBack");
								const indexPosition = activeGlowBallIndexes.value.indexOf(index);
								activeGlowBallIndexes.value?.splice(indexPosition, 1);
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
		return { navItems, data, refLineWrapper, activeGlowBallIndexes };
	},
});
