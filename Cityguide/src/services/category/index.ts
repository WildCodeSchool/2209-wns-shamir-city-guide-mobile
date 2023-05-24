import { useQuery } from "@apollo/client";
import { 
  GET_ALL_CATEGORIES, 
  GET_CATEGORY_BY_ID, 
  GET_CATEGORY_BY_NAME 
} from "../../graphql/category/queries";


export const GetAllCategories = () => {
  const { data: allCategories, error: categoriesError, loading: categoriesLoading } = useQuery(GET_ALL_CATEGORIES);
  return { 
    allCategories, 
    categoriesError, 
    categoriesLoading 
  };
}

export const GetCategoryById = (id: number) => {
  const { data: categoryById, error: categoryByIdError, loading: categoryByIdLoading } = useQuery(GET_CATEGORY_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    categoryById, 
    categoryByIdError, 
    categoryByIdLoading 
  };
}

export const GetCategoryByName = (name: string) => {
  const { data: categoryByName, error: categoryByNameError, loading: categoryByNameLoading } = useQuery(GET_CATEGORY_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    categoryByName, 
    categoryByNameError, 
    categoryByNameLoading 
  };
}
