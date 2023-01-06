import { defineNuxtModule } from "@nuxt/kit";
import fs from "fs";
import { resolve } from "path";
import { ICmsPage } from "~/interfaces/cms/globals";
import { CMSResource } from "../resources/contentfulClient";
import { GetAllPages } from "../resources/contentfulHelper";
import { VehicleClient } from "../resources/vehicleClient";
export default defineNuxtModule({
	async setup(_options, nuxt) {
		nuxt.hook("nitro:config", async (NitroConfig) => {
			const cms = new CMSResource(nuxt.options.runtimeConfig.public);
			if (nuxt.options.runtimeConfig.public.NITRO_PRESET != null) {
				NitroConfig.preset = nuxt.options.runtimeConfig.public.NITRO_PRESET;
			}
			const pages: ICmsPage[] = await GetAllPages(cms);
			const usedCarSlug = pages.find((p) => p.typename === "UsedCarFilterPage" && p.isExport == false)?.slug;
			const usedExportCarSlug = pages.find((p) => p.typename === "UsedCarFilterPage" && p.isExport == true)?.slug;
			const checkoutPages = [
				{ path: "/checkout/" },
				{ path: "/checkout/optional-equipment/" },
				{ path: "/checkout/your-information/" },
				{ path: "/checkout/trade-car/" },
				{ path: "/checkout/financing/" },
				{ path: "/checkout/service-agreement/" },
				{ path: "/checkout/insurance/" },
				{ path: "/checkout/delivery/" },
				{ path: "/checkout/order-confirm/" },
				{ path: "/checkout/order-success/" },
			];
			const baseUrl = nuxt.options.runtimeConfig.public.BASE_URL;
			const vehicleApi = new VehicleClient(nuxt.options.runtimeConfig.public);
			const vehicleSlugs = await vehicleApi.GetAllUsedVehicleSlugsAsync();
			const vehicleExportSlugs = await vehicleApi.GetAllUsedExportVehicleSlugsAsync();
			if (NitroConfig && NitroConfig.prerender) {
				NitroConfig.prerender.routes = pages
					.map((page) => page.path)
					.concat(checkoutPages.map((checkoutPage) => checkoutPage.path))
					.concat(vehicleSlugs?.map((slug) => `/${usedCarSlug}${slug}`))
					.concat(vehicleExportSlugs?.map((slug) => `/${usedExportCarSlug}${slug}`))
					.concat("/404/");
			}

			let sitemapString =
				'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
			NitroConfig.prerender.routes.forEach((url) => {
				sitemapString += `<url>
				<loc>${baseUrl + url}</loc>
				</url>`;
			});
			sitemapString += "</urlset>";
			try {
				fs.writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemapString);
			} catch (e) {
				console.log("Cannot write file ", e);
			}
		});
	},
});
