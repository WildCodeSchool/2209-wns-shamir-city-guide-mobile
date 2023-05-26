import { gql } from "@apollo/client";


export const GET_ALL_TAGS = gql`
  query GetAllTags {
    getAllTags {
      id
      name 
      icon
    }
  }
`;

export const GET_TAG_BY_ID = gql`
  query GetTagById ($id: Float!) {
    getTagById (id: $id) {
      id
      name  
      icon 
    }
  }
`;

export const GET_TAG_BY_NAME = gql`
  query GetTagByName ($name: String!) {
    getTagByName (name: $name) {
      id
      name  
      icon 
    }
  }
`;