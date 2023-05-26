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
      style={[styles.button]}
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
    backgroundColor: theme.buttonColor,
    width: 100,
    borderRadius: 20,
    padding: 10
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center'
  },
});

export default ThemedButton;
