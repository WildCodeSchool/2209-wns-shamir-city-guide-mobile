import { gql } from "@apollo/client";


export const GET_ALL_CITIES = gql`
  query GetAllCities {
    getAllCities {
      id
      name
      latitude
      longitude
      picture
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_CITY_BY_ID = gql`
  query GetCityById ($id: Float!) {
    getCityById (id: $id) {
      id
      name
      latitude
      longitude
      picture
      user {
        id
        username
        email
      } 
    }
  }
`;

export const GET_CITY_BY_NAME = gql`
  query GetCityByName ($name: String!) {
    getCityByName (name: $name) {
      id
      name
      latitude
      longitude
      picture
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_CITIES_BY_USERNAME = gql`
  query GetCitiesByUsername ($username: String!) {
    getCitiesByUsername (username: $username) {
      id
      name
      latitude
      longitude
      picture
      user {
        id
        username
        email
      }
    }
  }
`;