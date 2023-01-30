import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/home";
import MapContainer from "./screen/mapContainer";
import Itineraire from "./screen/itineraire";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="MAP" component={MapContainer} />
        <Tab.Screen name="ITINERAIRE" component={Itineraire} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}