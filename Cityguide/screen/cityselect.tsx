import {Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function Cityselect() {
const cities = [
    { label: 'New York', value: 'New York' },
    { label: 'London', value: 'London' },
    { label: 'Paris', value: 'Paris' }
  ];
  
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    cities[0].value
  );
  
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
<Picker
  style={{ height: 50, width: '100%' }}
  selectedValue={selectedCity}
  onValueChange={(itemValue: string, itemIndex: any) => handleCityChange(itemValue)}
>
  {cities.map(city => (
    <Picker.Item label={city.label} value={city.value} key={city.value} />
  ))}
</Picker>

  )
}
