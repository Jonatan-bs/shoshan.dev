import gsap from "gsap";
export const useAnimation = () => {
	const fadeUp = (
		elms: HTMLElement[] | HTMLElement | undefined,
		scrollTriggerElm: HTMLElement | undefined
	) => {
		if (elms && scrollTriggerElm) {
			gsap.from(elms, {
				opacity: 0,
				stagger: 0.15,
				translateY: "5rem",
				scrollTrigger: {
					start: "top center",
					trigger: scrollTriggerElm,
					toggleActions: "play none none reverse",
				},
			});
		}
	};
	return { fadeUp };
};
