import { gql } from "@apollo/client";


export const GET_ALL_ROLES = gql`
  query GetAllRoles {
    getAllRoles {
      id
      name
    }
  }
`;

export const GET_ROLE_BY_ID = gql`
  query GetRoleById ($id: Float!) {
    getRoleById (id: $id) {
      id
      name 
    }
  }
`;
