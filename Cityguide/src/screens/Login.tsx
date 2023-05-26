import React, { useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik  } from 'formik';
import { AUTHENTICATION_LOGIN } from '../graphql/authentication/mutations';

import ErrorModal from '../components/errorModal';
import Loader from '../components/loader';

import { validateUserForm } from '../utils/formsVerifications/register';
import { IUserConnectionPayload } from '../types/user';
import { UserFormValues } from '../types/forms';
import { Colors } from '../utils/constants';

const initialValues: UserFormValues = {
  username: '',
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handleModalClose = () => setOpenErrorModal(false);

  const [
    login
  ] = useMutation(AUTHENTICATION_LOGIN, {
    onCompleted(data: any) {
      setLoading(false);
      navigation.navigate("DisplayIcons" as never);
    },
    onError(error: ApolloError) {
      setLoading(false);
      setServerErrorMsg(error.message);
      setOpenErrorModal(true);
    },
  });
  
  const onLogin = async (values: UserFormValues) => {
    setLoading(true);
    setTimeout(() => {
      const userConnectionPayload: IUserConnectionPayload = { 
        username: values.username.toLowerCase().trim(),
        email: values.email.toLowerCase().trim(), 
        password: values.password.trim()
      }
      login({ variables: { user: userConnectionPayload }});
    }, 500)
  } 
  
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="login" size={60} color={Colors.PURPLE} />
      <Formik
        initialValues={initialValues}
        validate={validateUserForm}
        onSubmit={onLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {errors.username && <Text style={styles.error}>{errors.username}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <Pressable 
              onPress={() => handleSubmit()}
              disabled={!isValid}
              style={styles.button}
            >
              <View style={styles.loader}>
                {loading && <Loader color={Colors.WHITE} />}
              </View>
              <Text style={styles.buttonText}>Se connecter</Text>
            </Pressable>

            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("S'enregistrer" as never)}>
              <Text style={styles.linkText}>S'enregistrer</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      {openErrorModal && <ErrorModal message={serverErrorMsg} onClose={handleModalClose} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 10
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
    borderColor: Colors.BLUELIGHT,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: 40,
    backgroundColor: Colors.PURPLE,
    borderRadius: 20,
    marginTop: 10
  },
  buttonText: {
    flex: 3,
    color: '#fff',
    fontSize: 18,
  },
  link: {
    marginTop: 10
  },
  linkText: {
    fontSize: 18
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  loader: {
    flex: 1
  }
});

export default Login;
