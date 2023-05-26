import { useQuery } from "@apollo/client";
import { 
  GET_ALL_CIRCUITS, 
  GET_CIRCUITS_BY_ID, 
  GET_CIRCUIT_BY_NAME 
} from "../../graphql/circuit/queries";


export const GetAllCircuits = () => {
  const { data: allCircuits, error: circuitsError, loading: circuitsLoading } = useQuery(GET_ALL_CIRCUITS, {
    fetchPolicy: "network-only",
  });
  return { 
    allCircuits, 
    circuitsError, 
    circuitsLoading 
  };
}

export const GetCircuitsById = (id: number) => {
  const { data: circuitById, error: circuitByIdError, loading: circuitByIdLoading } = useQuery(GET_CIRCUITS_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    circuitById, 
    circuitByIdError, 
    circuitByIdLoading 
  };
}

export const GetCircuitByName = (name: string) => {
  const { data: circuitByName, error: circuitByNameError, loading: circuitByNameLoading } = useQuery(GET_CIRCUIT_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    circuitByName, 
    circuitByNameError, 
    circuitByNameLoading 
  };
}