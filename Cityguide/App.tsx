import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapContainer from "./screen/mapContainer";
import Itineraire from "./screen/itineraire";
import ConnectScreen from "./screen/connectscreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Connect" component={ConnectScreen} />
        <Tab.Screen name="MAP" component={MapContainer} />
        <Tab.Screen name="ITINERAIRE" component={Itineraire} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}