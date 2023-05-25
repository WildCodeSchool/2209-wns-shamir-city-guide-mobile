import { useQuery } from "@apollo/client";
import { 
  GET_ALL_USERS, 
  GET_ALL_USERS_WITHOUT_ROLES, 
  GET_USER_BY_ID, 
  GET_USER_BY_USERNAME 
} from "../../graphql/user/queries";


export const GetAllUsers = () => {
  const { data: allUsers, error: usersError, loading: usersLoading } = useQuery(GET_ALL_USERS);
  return { 
    allUsers, 
    usersError, 
    usersLoading 
  };
}

export const GetAllUsersWithoutRoles = () => {
  const { data: allUsers, error: usersError, loading: usersLoading } = useQuery(GET_ALL_USERS_WITHOUT_ROLES);
  return { 
    allUsers, 
    usersError, 
    usersLoading 
  };
}

export const GetUserById = (id: number) => {
  const { data: userById, error: userByIdError, loading: userByIdLoading } = useQuery(GET_USER_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    userById, 
    userByIdError, 
    userByIdLoading 
  };
}

export const GetUserByUsername = (username: string) => {
  const { data: userByUsername, error: userByUsernameError, loading: userByUsernameLoading } = useQuery(GET_USER_BY_USERNAME, {
    variables: {
      username
    }
  });
  return { 
    userByUsername, 
    userByUsernameError, 
    userByUsernameLoading 
  };
}
