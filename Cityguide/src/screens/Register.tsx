import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { View, Text, Button } from 'react-native';
import { AUTHENTICATION_REGISTER } from '../graphql/authentication/mutations';
import { IUserConnectionPayload } from '../types/user';


const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [
    register, { 
      error: loginError
    }
  ] = useMutation(AUTHENTICATION_REGISTER, {
    onCompleted(data: any) {
      setUsername("");
      setEmail("");
      setPassword("");

    },
    onError() {
      
    },
  });
  
  const onRegister = async () => {
    setTimeout(() => {
      const userConnectionPayload: IUserConnectionPayload = { 
        username: username.toLowerCase().trim(),
        email: email.toLowerCase().trim(), 
        password: password.trim()
      }
      register({ variables: { user: userConnectionPayload }});
    }, 500)
  } 

  const changeUsername = async (value: string) => {
    setUsername(value);
  } 
  const changeEmail = async (value: string) => {
    setEmail(value);
  }
  const changePassword = async (value: string) => {
    setPassword(value);
  }
  
  
  return (
    <View>
      <Text>Se connecter</Text>
      <Button
        onPress={onRegister}
        title="S'enregistrer"
        color="#841584"
      />
    </View>
  );
};

export default Register;
