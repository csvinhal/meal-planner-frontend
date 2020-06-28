import { gql } from "@apollo/client";

export const GET_LOADER = gql`
  query GetLoader {
    loader @client {
      open
    }
  }
`;
