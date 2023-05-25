import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { View, Text, Button } from 'react-native';
import { AUTHENTICATION_LOGIN } from '../graphql/authentication/mutations';
import { IUserConnectionPayload } from '../types/user';


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [
    login, { 
      error: loginError
    }
  ] = useMutation(AUTHENTICATION_LOGIN, {
    onCompleted(data: any) {
      setUsername("");
      setEmail("");
      setPassword("");

    },
    onError() {
      
    },
  });
  
  const onLogin = async () => {
    setTimeout(() => {
      const userConnectionPayload: IUserConnectionPayload = { 
        username: username.toLowerCase().trim(),
        email: email.toLowerCase().trim(), 
        password: password.trim()
      }
      login({ variables: { user: userConnectionPayload }});
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
        onPress={onLogin}
        title="Se connecter"
        color="#841584"
      />
    </View>
  );
};

export default Login;
