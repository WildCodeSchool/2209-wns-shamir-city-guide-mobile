import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetAllCities } from '../services/city';
import { ICity } from '../types/city';
import MapView from 'react-native-maps';
import RNPickerSelect from 'react-native-picker-select';


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
           <RNPickerSelect
      onValueChange={(value: any) => console.log(value)}
      items={allCities?.getAllCities.map((city: ICity) => ({
        label: city.name,
        value: city.name,
      }))}
    />
           <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 50.85045,
        longitude: 4.34878,
        latitudeDelta: 40,
        longitudeDelta: 40,
      }}
    />
        </View>
      ))}

    
    </View>
  );
};

export default Globalmap;
