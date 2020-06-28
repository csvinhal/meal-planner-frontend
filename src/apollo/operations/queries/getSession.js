import { gql } from "@apollo/client";

export const GET_SESSION = gql`
  query GetToast {
    session @client {
      username
      email
      email_verified
    }
  }
`;
