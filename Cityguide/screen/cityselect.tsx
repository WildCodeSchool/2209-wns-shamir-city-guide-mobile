import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function Cityselect() {
  const cities = [
    { label: 'Nantes', value: 'Nantes', latitude: 47.21829365748452, longitude: -1.5522667227281854 },
    { label: 'Paris', value: 'Paris' , latitude: 48.8567036645077, longitude: 2.3487513138297285}
  ];
  
  const [selectedCity, setSelectedCity] = useState<any | undefined>(
    cities[0].value
  );

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };


  return (
    <Picker
      style={{ height: 50, width: '50%' }}
      selectedValue={selectedCity}
      onValueChange={(itemValue: string, itemIndex: any) => handleCityChange(itemValue)}
    >
      {cities.map(city => (
        <Picker.Item label={city.label} value={city.value} key={city.value} />
      ))}
    </Picker>
  )
}