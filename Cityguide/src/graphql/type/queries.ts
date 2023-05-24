import { gql } from "@apollo/client";


export const GET_ALL_TYPES = gql`
  query GetAllTypes {
    getAllTypes {
      id
      name  
      logo
      color 
    }
  }
`;

export const GET_TYPE_BY_ID = gql`
  query GetTypeById($id: Float!) {
    getTypeById (id: $id) {
      id
      name  
      logo
      color 
    }
  }
`;

export const GET_TYPE_BY_NAME = gql`
  query GetTypeByName($name: String!) {
    getTypeByName (name: $name) {
      id
      name  
      logo
      color 
    }
  }
`;