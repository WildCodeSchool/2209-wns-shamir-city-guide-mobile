import { gql } from "@apollo/client";


export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      username 
      email
      roles {
        id
        name
      }
    }
  }
`;

export const GET_ALL_USERS_WITHOUT_ROLES = gql`
  query GetAllUsers {
    getAllUsers {
      id
      username 
      email
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById ($id: Float!) {
    getUserById (id: $id) {
      id
      username 
      email
      roles {
        id
        name
      } 
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query GetUserByName ($username: String!) {
    getUserByName (username: $username) {
      id
      username 
      email
      roles {
        id
        name
      }  
    }
  }
`;