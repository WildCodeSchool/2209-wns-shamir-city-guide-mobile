import { useQuery } from "@apollo/client";
import { 
  GET_ALL_POIS, 
  GET_POI_BY_ID, 
  GET_POI_BY_NAME,
  GET_POIS_BY_CITY 
} from "../../graphql/poi/queries";


export const GetAllPois = () => {
  const { data: allPois, error: poisError, loading: poisLoading } = useQuery(GET_ALL_POIS, {
    fetchPolicy: "network-only",
  });
  return { 
    allPois, 
    poisError, 
    poisLoading 
  };
}

export const GetPoiById = (id: number) => {
  const { data: poiById, error: poiByIdError, loading: poiByIdLoading } = useQuery(GET_POI_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    poiById, 
    poiByIdError, 
    poiByIdLoading 
  };
}

export const GetPoiByName = (name: string) => {
  const { data: poiByName, error: poiByNameError, loading: poiByNameLoading } = useQuery(GET_POI_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    poiByName, 
    poiByNameError, 
    poiByNameLoading 
  };
}

export const GetPoisByCity = (cityId: number) => {
  const { data: poisByCity, error: poisByCityError, loading: poisByCityLoading } = useQuery(GET_POIS_BY_CITY, {
    fetchPolicy: "network-only",
    variables: {
      cityId: cityId
    }
  }); 
  return { 
    poisByCity, 
    poisByCityError, 
    poisByCityLoading 
  };
}