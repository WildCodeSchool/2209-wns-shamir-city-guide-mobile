import React from 'react';
import { View, Text } from 'react-native';
import { ITag } from '../types/tag';
import { GetAllTags } from '../services/tag';


const HomePage = () => {
  const { allTags, tagsLoading, tagsError } = GetAllTags();

  if (tagsLoading) {
    return (
        <View>
          <Text>Loading...</Text>
        </View>
    );
  }

  if (tagsError) {
    return (
      <View>
        <Text>Error: {tagsError.message}</Text>
      </View>
    );
  }
  
  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      {allTags.getAllTags.map((tag: ITag, index: number) => (
        <View key={index}>
          <Text>{tag.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomePage;
