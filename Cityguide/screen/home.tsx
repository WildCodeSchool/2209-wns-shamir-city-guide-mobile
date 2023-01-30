import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Point, points } from './cityselect';
import GooglePlacesInput from "./searchbar";

export default function Home() {
  return ( 
    <View style={{paddingTop: 40}}>
        <GooglePlacesInput />
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 47.21829365748452, 
        longitude: -1.5522667227281854,
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
      </MapView>
      </View>
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