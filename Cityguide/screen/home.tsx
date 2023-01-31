import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StatusBar, StyleSheet, View } from 'react-native';
import GooglePlacesInput from "./searchbar";

export default function Home() {

  class Point {
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;

    constructor(id:number, title:string, description:string, latitude:number, longitude:number){
        this.id = id,
        this.title = title,
        this.description = description
        this.latitude = latitude,
        this.longitude = longitude    
    }
}

const point1 = new Point(1, 'toto', 'tata',47.24870913135022,-1.6170062140814687)
const point2 = new Point(2, 'titi', 'tata',47.21712097938095,-1.5555514403891306)
const point3 = new Point(3, 'titi', 'tata',47.2655418987309,-1.5710009665896438)
const points = [point1, point2, point3];

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