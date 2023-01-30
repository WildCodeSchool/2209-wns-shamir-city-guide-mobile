import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD8kaYmqkEw9DMhpbtqnIe9Qk7PCQSb3R4';

const Itineraire = () => {
  const region = {
    latitude: 47.21829365748452,
    longitude: -1.5522667227281854,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const origin = { latitude: 47.24870913135022, longitude: -1.6170062140814687 };
  const destination = { latitude: 47.21712097938095, longitude: -1.5555514403891306 };

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
    >
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </MapView>
  );
};

export default Itineraire;



