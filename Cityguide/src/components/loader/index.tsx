import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface IProps {
  color: string
}

const Loader = ({ color }: IProps) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;