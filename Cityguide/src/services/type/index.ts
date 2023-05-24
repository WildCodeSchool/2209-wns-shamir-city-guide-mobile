import { useQuery } from "@apollo/client";
import { 
  GET_ALL_TYPES, 
  GET_TYPE_BY_ID, 
  GET_TYPE_BY_NAME 
} from "../../graphql/type/queries";


export const GetAllTypes = () => {
  const { data: allTypes, error: typesError, loading: typesLoading } = useQuery(GET_ALL_TYPES);
  return { 
    allTypes, 
    typesError, 
    typesLoading 
  };
}

export const GetTypeById = (id: number) => {
  const { data: typeById, error: typeByIdError, loading: typeByIdLoading } = useQuery(GET_TYPE_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    typeById, 
    typeByIdError, 
    typeByIdLoading 
  };
}

export const GetTypeByName = (name: string) => {
  const { data: typeByName, error: typeByNameError, loading: typeByNameLoading } = useQuery(GET_TYPE_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    typeByName, 
    typeByNameError, 
    typeByNameLoading 
  };
}
