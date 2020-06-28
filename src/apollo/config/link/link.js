import { HttpLink } from "@apollo/client";
import { Auth } from "aws-amplify";

const awsGraphqlFetch = async (uri, options) => {
  const session = await Auth.currentSession();
  options.headers["Authorization"] = `Bearer ${session.getIdToken().jwtToken}`;
  return fetch(uri, options);
};

export const link = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
  fetch: awsGraphqlFetch
});
