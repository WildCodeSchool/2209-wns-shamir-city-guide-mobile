import React, {useState} from "react";
import { View } from "react-native";

const MyComponent = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
  
    const handleSearch = (address: string) => {
      // utilisez l'API de géocodage pour convertir l'adresse en coordonnées géographiques
      setLatitude(lat);
      setLongitude(long);
    }
  
    return (
      <View>
        <SearchBar onSearch={handleSearch} />
        <MapComponent latitude={latitude} longitude={longitude} />
      </View>)}