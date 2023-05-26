import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../themes/button';

interface IProps {
  title: string
  onPress: () => void
}

const ThemedButton = ({ title, onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.buttonColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Styles par défaut du bouton
    // Utilisez les variables de thème pour définir les couleurs par défaut
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    // Styles par défaut du texte du bouton
  },
});

export default ThemedButton;
