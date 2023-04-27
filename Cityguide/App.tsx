import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapContainer from "./screen/mapContainer";
import Itineraire from "./screen/itineraire";
import ConnectScreen from "./screen/connectscreen";
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from "./screen/log/register";
import LoginPage from "./screen/log/login";
import Constants from "expo-constants";
import { createHttpLink } from "@apollo/client/link/http/createHttpLink";
import { ApolloClient } from "@apollo/client/core/ApolloClient";
import { InMemoryCache } from "@apollo/client/cache/inmemory/inMemoryCache";
import {setContext} from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";

const { manifest } = Constants;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const uri = `http://${manifest?.debuggerHost?.split(':').shift()}:5000/graphql`;
const httpLink = createHttpLink({
  uri,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const appName: string = 'mobile-builder';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
      <Tab.Screen name="Connect" component={ConnectScreen} />
        <Tab.Screen name="MAP" component={MapContainer} />
        <Tab.Screen name="ITINERAIRE" component={Itineraire} />
      </Tab.Navigator> */}
      <Stack.Navigator>
      <Stack.Screen name="CityGuide" component={ConnectScreen} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}