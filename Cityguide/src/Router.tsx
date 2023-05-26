import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Login from "./screens/Login";
import Register from './screens/Register';
import Globalmap from './screens/Globalmap';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Globalmap" component={Globalmap} />
        <Stack.Screen name="Se connecter" component={Login} />
        <Stack.Screen name="S'enregistrer" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
