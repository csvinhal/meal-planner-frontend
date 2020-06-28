import { ApolloClient } from "@apollo/client";
import { cache } from "./cache/cache";
import { link } from "./link/link";

export const client = new ApolloClient({
  cache,
  link,
});
