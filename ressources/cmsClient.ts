import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_GQL_HOST as string;

const cmsClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${import.meta.env.VITE_GQL_TOKEN}`,
	},
});

export { cmsClient };
