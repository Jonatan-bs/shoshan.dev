import emitter from "tiny-emitter/instance";

const tempDeactivated = ref(false);

export const useHashSetter = (deactivated = false) => {
	const observer = ref<IntersectionObserver>();
	const refHashElm = ref<HTMLElement | HTMLElement[]>();

	const tempDeactiveateHashSetter = (ms = 500) => {
		tempDeactivated.value = true;
		setTimeout(() => {
			tempDeactivated.value = false;
		}, ms);
	};

	if (deactivated) return { refHashElm, tempDeactiveateHashSetter };

	onMounted(() => {
		const options = {
			root: document.querySelector("#scrollArea"),
			rootMargin: "0px",
			threshold: 1.0,
		};
		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (tempDeactivated.value) return;
					const hash = "#" + entry.target.id.replace(" ", "-").toLowerCase();
					emitter.emit("hashChanged", hash);
					history.pushState({}, "", hash);
				}
			});
		};
		observer.value = new IntersectionObserver(callback, options);
		if (observer.value && Array.isArray(refHashElm.value)) {
			refHashElm.value.forEach((elm) => {
				observer.value?.observe(elm);
			});
		} else if (observer.value && refHashElm.value && !Array.isArray(refHashElm.value)) {
			observer.value?.observe(refHashElm.value);
		}
	});
	onDeactivated(() => {
		if (observer.value && Array.isArray(refHashElm.value)) {
			refHashElm.value.forEach((elm) => {
				observer.value?.unobserve(elm);
			});
		} else if (observer.value && refHashElm.value && !Array.isArray(refHashElm.value)) {
			observer.value?.unobserve(refHashElm.value);
		}
	});

	return { refHashElm, tempDeactiveateHashSetter };
};
