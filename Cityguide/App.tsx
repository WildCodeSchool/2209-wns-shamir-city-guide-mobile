import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapContainer from "./screen/mapContainer";
import Itineraire from "./screen/itineraire";
import ConnectScreen from "./screen/connectscreen";
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from "./screen/log/register";
import LoginPage from "./screen/log/login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Connect" component={ConnectScreen} />
        <Tab.Screen name="MAP" component={MapContainer} />
        <Tab.Screen name="ITINERAIRE" component={Itineraire} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
      <Stack.Screen name="CityGuide" component={ConnectScreen} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}