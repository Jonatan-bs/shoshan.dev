import { PageHomeDocument } from "~~/operations-types";
import { cmsClient } from "~~/ressources/cmsClient";

export default defineComponent({
	name: "HomePage",
	setup(props, ctx) {
		onMounted(async () => {
			try {
				const data = await cmsClient.request(PageHomeDocument);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		});
	},
});
