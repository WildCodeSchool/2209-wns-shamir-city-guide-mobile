import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useMutation, gql } from '@apollo/client';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const REGISTER_USER = gql`
    mutation registerUser($username: String!, $email: String!, $password: String!) {
      registerUser(username: $username, email: $email, password: $password) {
        id
        username
        email
      }
    }
  `;

  const [registerUser] = useMutation(REGISTER_USER);

  const handleSubmit = () => {
    registerUser({ variables: { username, email, password } })
  .then(response => {
    const newUser = response.data.registerUser;
    console.log(`User ${newUser.username} (${newUser.email}) registered with ID ${newUser.id}`);
    // Afficher un message de confirmation ou rediriger l'utilisateur vers une autre page
  })
  .catch(error => {
    // Gérer l'erreur
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Page</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={handleSubmit}>Register</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default RegisterPage;
