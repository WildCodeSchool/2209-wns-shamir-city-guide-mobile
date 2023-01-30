import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ConnectScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ require( '../assets/nantes.jpg' )}
        style={styles.backgroundImage}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConnectScreen;
