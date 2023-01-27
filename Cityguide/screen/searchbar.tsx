import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Rechercher une adresse"
        value={search}
        onChangeText={text => setSearch(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
      />
    </View>
  );
};

export default SearchBar;