import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../utils/constants"


const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={ require( '../../assets/city-purple.png' )}
        style={styles.backgroundImage}
      />

      <View style={styles.container}>
        <Text style={styles.title}>City Guid</Text>
      </View>

      <View style={styles.container}>
        < Text style={styles.text}> Site cartographique interactif de visite de villes via des points d'intérêt et des circuits
        </Text>
      </View>

      <View style={styles.buttonsContainer}> 
      <TouchableOpacity onPress={() => navigation.navigate("S'enregistrer" as never)}>
        <Text style={styles.buttonText}>S'enregistrer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Se connecter" as never)}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DisplayIcons" as never)}>
        <Text style={styles.buttonText}>Visiter le site</Text>
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
    resizeMode: 'contain',
  },
  title: {
    flex: 2,
    color: Colors.BLUELIGHT,
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
  },
    text: {
    color: Colors.BLUEGREY,
    fontSize: 15,
    marginBottom: 50,
    padding: 5,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLUELIGHT,
    marginTop: 7,
    marginBottom: 5,
  },
});

export default Home;
