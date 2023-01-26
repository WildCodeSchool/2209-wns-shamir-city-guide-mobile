import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App({ points }:{
points:any
}) {
  return (
  
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {points.map((point: { id: React.Key | null | undefined; latitude: any; longitude: any; title: string | undefined; description: string | undefined; }) => (
        <Marker
          key={point.id}
          coordinate={{
            latitude: point.latitude,
            longitude: point.longitude,
          }}
          title={point.title}
          description={point.description}
        />
      ))}
      <Polyline
        coordinates={points.map((point: { latitude: any; longitude: any; }) => ({
            latitude: point.latitude,
            longitude: point.longitude
        }))}
        strokeColor="#000"
        strokeWidth={3}
      />
    </MapView>
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
});