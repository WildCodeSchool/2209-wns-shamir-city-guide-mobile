import { gql } from "@apollo/client";


export const AUTHENTICATION_LOGIN = gql`
  mutation Login($user: UserType!) {
    login(user: $user) {
      id
      username
      email
      roles {
        name
      }
      token
    }
  }
`;

export const AUTHENTICATION_REGISTER = gql`
  mutation Register($user: UserType!) {
    register(user: $user) {
      id
      username
      email
    }
  }
`;