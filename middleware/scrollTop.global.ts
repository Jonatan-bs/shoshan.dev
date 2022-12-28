export default defineNuxtRouteMiddleware((to, from) => {
	const html = document.querySelector("html");
	if (to.path !== from.path && html) {
		html.style.scrollBehavior = "auto";
		setTimeout(() => {
			html.style.scrollBehavior = "smooth";
		}, 1000);
	}
});
