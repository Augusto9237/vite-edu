import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4vy4q0e1yql01un7yonane3/master",
  cache: new InMemoryCache(),
});
