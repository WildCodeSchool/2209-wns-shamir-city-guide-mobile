import { useQuery } from "@apollo/client";
import { 
  GET_ALL_CITIES, 
  GET_CITY_BY_ID, 
  GET_CITY_BY_NAME,
  GET_CITIES_BY_USERNAME
} from "../../graphql/city/queries";


export const GetAllCities = () => {
  const { data: allCities, error: citiesError, loading: citiesLoading } = useQuery(GET_ALL_CITIES, {
    fetchPolicy: "network-only",
  });
  return { 
    allCities, 
    citiesError, 
    citiesLoading 
  };
}

export const GetCityById = (id: number) => {
  const { data: cityById, error: cityByIdError, loading: cityByIdLoading } = useQuery(GET_CITY_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    cityById, 
    cityByIdError, 
    cityByIdLoading 
  };
}

export const GetCityByName = (name: string) => {
  const { data: cityByName, error: cityByNameError, loading: cityByNameLoading } = useQuery(GET_CITY_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    cityByName, 
    cityByNameError, 
    cityByNameLoading 
  };
}

export const GetCitiesByUsername = (username: string) => {
    const { data: citiesByUsername, error: citiesByUsernameError, loading: citiesByUsernameLoading } = useQuery(GET_CITIES_BY_USERNAME, {
      fetchPolicy: "network-only",
      variables: {
        username
      }
    });
    return {
      citiesByUsername,
      citiesByUsernameError,
      citiesByUsernameLoading
    };
}