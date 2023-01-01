export default defineNuxtRouteMiddleware((to, from) => {
	if (!process.server) {
		const html = document.querySelector("html");
		if (to.path !== from.path && html) {
			html.style.scrollBehavior = "auto";
			setTimeout(() => {
				html.style.scrollBehavior = "smooth";
			}, 1000);
		}
	}
});
