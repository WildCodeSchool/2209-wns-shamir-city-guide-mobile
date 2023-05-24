import { gql } from "@apollo/client";


export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name 
      color
      icon
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query GetCategoryById ($id: Float!) {
    getCategoryById (id: $id) {
      id
      name  
      color
      icon 
    }
  }
`;

export const GET_CATEGORY_BY_NAME = gql`
  query GetCategoryByName ($name: String!) {
    getCategoryByName (name: $name) {
      id
      name  
      color
      icon 
    }
  }
`;