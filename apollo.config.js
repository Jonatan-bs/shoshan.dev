module.exports = {
	client: {
		service: {
			name: "contentful",
			localSchemaFile: "./schema.graphql",
		},
		includes: ["./queries/**/*.ts", "./queries/**/*.gql", "./queries/**/*.graphql"],
	},
};
