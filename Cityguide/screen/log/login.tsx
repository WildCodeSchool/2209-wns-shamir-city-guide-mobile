import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Nom d'utilisateur / Adresse e-mail"
        autoCapitalize="none"
        autoComplete="username"
        textContentType="username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Mot de passe"
        secureTextEntry={true}
        autoCapitalize="none"
        autoComplete="password"
        textContentType="password"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 48,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#3366ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginPage;
