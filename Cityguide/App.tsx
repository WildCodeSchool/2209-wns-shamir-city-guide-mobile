import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Router from './src/Router';
import Constants from "expo-constants";


const { manifest } = Constants;
const uri = `http://${manifest?.debuggerHost?.split(':').shift()}${process.env.SERVEUR_URI_CHUNK}`;
console.log("Uri =>", uri);

const apolloClient  = new ApolloClient({
  uri: uri, // Remplacez par l'URL de votre serveur Apollo Server
  cache: new InMemoryCache({
    addTypename: false
  }),
});


const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
