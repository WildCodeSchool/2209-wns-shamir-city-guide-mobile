import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Cityselect from './cityselect';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD8kaYmqkEw9DMhpbtqnIe9Qk7PCQSb3R4';

const Itineraire = () => {
  const region = {
    latitude: 47.21829365748452,
    longitude: -1.5522667227281854,
    latitudeDelta: 0.150,
    longitudeDelta: 0.150
  };

  const origin = { latitude: 47.2166797993493, longitude: -1.548894740675771 }; 
  const waypoint = { latitude: 47.21331196578812, longitude: -1.5645261152044012 };  
  const destination = { latitude: 47.22036113247877, longitude: -1.5476538888444817 };

  return (
    <View style={{paddingTop: 5}}>
      <Cityselect />
    <MapView
      style={ styles.map}
      initialRegion={region}      
          >
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
      <Marker coordinate={waypoint} />
      <MapViewDirections
        origin={origin}
        waypoints={[waypoint]}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Itineraire;



