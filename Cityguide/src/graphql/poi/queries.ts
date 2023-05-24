import { gql } from "@apollo/client";


export const GET_ALL_POIS = gql`
  query GetAllPoi {
    getAllPoi {
      id
      name  
      address
      latitude
      longitude
      picture
      city {
        latitude
        id
        longitude
        name
        picture
        user {
          id
          username
          email
        }
      user {
        id
        username
        email
      }
    }
      type {
        id
        name
        logo
        color
      }
      tags {
        id
        name
        icon
      }
    }
  }
`;

export const GET_POI_BY_ID = gql`
  query GetPoiById ($id: Float!) {
    getPoiById (id: $id) {
      id
      name  
      address
      latitude
      longitude
      picture
      type {
        id
        name
        logo
        color
      }
      tags {
        id
        name
        icon
      }
    }
  }
`;

export const GET_POI_BY_NAME = gql`
  query GetPoiByName ($name: String!) {
    getPoiByName (name: $name) {
      id
      name  
      address
      latitude
      longitude
      picture
      type {
        id
        name
        logo
        color
      }
      tags {
        id
        name
        icon
      }
    }
  }
`;

export const GET_POIS_BY_CITY = gql`
  query GetPoisByCity($cityId: Float!) {
    getPoisByCity(cityId: $cityId) {
      id 
      name
      picture
    }
  }
`;