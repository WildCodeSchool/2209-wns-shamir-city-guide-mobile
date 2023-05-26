import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetAllTags } from '../services/tag';
import { ITag } from '../types/tag';


const Home: React.FC = () => {
  const { allTags, tagsLoading, tagsError } = GetAllTags();
  const navigation = useNavigation();

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
      <Text>Bienvenue sur City Guid</Text>
      {allTags?.getAllTags.map((tag: ITag, index: number) => (
        <View key={index}>
          <Text>{tag.name}</Text>
        </View>
      ))}

      <TouchableOpacity onPress={() => navigation.navigate("S'enregistrer" as never)}>
        <Text>S'enregistrer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Se connecter" as never)}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
