import { useQuery } from "@apollo/client";
import { 
  GET_ALL_TAGS, 
  GET_TAG_BY_ID, 
  GET_TAG_BY_NAME 
} from "../../graphql/tag/queries";


export const GetAllTags = () => {
  const { data: allTags, error: tagsError, loading: tagsLoading } = useQuery(GET_ALL_TAGS);
  return { 
    allTags, 
    tagsError, 
    tagsLoading 
  };
}

export const GetTagById = (id: number) => {
  const { data: tagById, error: tagByIdError, loading: tagByIdLoading } = useQuery(GET_TAG_BY_ID, {
    variables: {
      id
    }
  });
  return { 
    tagById, 
    tagByIdError, 
    tagByIdLoading 
  };
}

export const GetTagByName = (name: string) => {
  const { data: tagByName, error: tagByNameError, loading: tagByNameLoading } = useQuery(GET_TAG_BY_NAME, {
    variables: {
      name
    }
  });
  return { 
    tagByName, 
    tagByNameError, 
    tagByNameLoading 
  };
}
