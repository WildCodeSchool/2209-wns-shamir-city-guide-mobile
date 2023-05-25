import React from 'react';


import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import HomePage from './src/screens/HomePage';


const apolloClient  = new ApolloClient({
  uri: `http://${process.env.IPV4_ADDRESS}:4000/graphql`, // Remplacez par l'URL de votre serveur Apollo Server
  cache: new InMemoryCache({
    addTypename: false
  }),
});


const App = () => {
  return (
    <ApolloProvider client={apolloClient }>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;


