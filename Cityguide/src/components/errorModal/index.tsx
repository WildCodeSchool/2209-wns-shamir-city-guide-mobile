import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import ThemedButton from '../buttons';
import { Colors } from '../../utils/constants';

interface IModalProps {
  onClose: () => void
  message: string
}

const ErrorModal = ({ message, onClose }: IModalProps) => {
  
  return (
    <Modal 
      visible={true} 
      animationType="fade" 
      onRequestClose={onClose}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.message}>{message}</Text>
          <ThemedButton title='Fermer' onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  message: {
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: Colors.PURPLE
  }
});

export default ErrorModal;
