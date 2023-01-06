import { GraphQLClient } from "graphql-request";
import { useRuntimeConfig } from "#imports";

export const useCmsClient = () => {
	const runtimeConfig = useRuntimeConfig();
	const cmsClient = new GraphQLClient(runtimeConfig.public.VITE_GQL_HOST, {
		headers: {
			authorization: `Bearer ${runtimeConfig.public.VITE_GQL_TOKEN}`,
		},
	});

	return { cmsClient };
};
