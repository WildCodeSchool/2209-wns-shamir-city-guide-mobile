import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetAllCities } from '../services/city';
import { ICity } from '../types/city';


const Globalmap: React.FC = () => {
  const { allCities, citiesError, citiesLoading } = GetAllCities();
  const navigation = useNavigation();

  if (citiesLoading) {
    return (
        <View>
          <Text>Loading...</Text>
        </View>
    );
  }

  if (citiesError) {
    return (
      <View>
        <Text>Error: {citiesError.message}</Text>
      </View>
    );
  }
  console.log(allCities);
  
  return (
    <View>
      <Text>Bienvenue sur City Guid</Text>
      {allCities?.getAllCities.map((city: ICity, index: number) => (
        <View key={index}>
          <Text>{city.name}</Text>
        </View>
      ))}

    
    </View>
  );
};

export default Globalmap;
