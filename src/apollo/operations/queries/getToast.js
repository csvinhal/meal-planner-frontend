import { gql } from "@apollo/client";

export const GET_TOAST = gql`
  query GetToast {
    toast @client {
      message
      severity
      open
    }
  }
`;
