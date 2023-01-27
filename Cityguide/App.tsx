import React, { useState } from 'react';
import { TextInput } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Point, points } from './screen/cityselect';
import SearchBar from './screen/test';

export default function App() {
  const SearchBar = () => {
    const [search, setSearch] = useState('');
  return ( 
    <><View>
      <TextInput
        placeholder="Rechercher une adresse"
        value={search}
        onChangeText={text => setSearch(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10 }} />
    </View><MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        {points.map((point: Point) => (
          <Marker
            key={point.id}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude,
            }}
            title={point.title}
            description={point.description} />
        ))}
        <Polyline
          coordinates={points.map((point: { latitude: any; longitude: any; }) => ({
            latitude: point.latitude,
            longitude: point.longitude
          }))}
          strokeColor="#000"
          strokeWidth={3} />
      </MapView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})}