import { useQuery } from "@apollo/client";
import { 
  GET_ALL_ROLES,
  GET_ROLE_BY_ID
} from "../../graphql/role/queries";


export const GetAllRoles = () => {
  const { data: allRoles, error: rolesError, loading: rolesLoading } = useQuery(GET_ALL_ROLES);
  return { 
    allRoles, 
    rolesError, 
    rolesLoading 
  };
}

export const GetRoleById = (id: number) => {
  const { data: roleById, error: roleByIdError, loading: roleByIdLoading } = useQuery(GET_ROLE_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    roleById, 
    roleByIdError, 
    roleByIdLoading 
  };
}
