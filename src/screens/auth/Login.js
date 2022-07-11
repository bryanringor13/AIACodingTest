import React, {useRef, useState} from 'react';
import {Box, Button, Container, Text, TextInput} from '../../components';
import {UserData} from '../../hooks/user';
import {setLoading, userAuthenticate} from '../../hooks/user/actions';
import {userInfo} from '../../res/data/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAvoidingView, Platform} from 'react-native';

const Login = ({closeEvent}) => {
  const dispatch = UserData()[1];
  const passwordRef = useRef(null);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const delayLogin = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const submitHandler = async () => {
    try {
      setError(() => null);
      const {email, password} = form;
      if (!email || !password) {
        return setError('Please provide your credentials');
      }

      if (userInfo.email !== email || userInfo.password !== password) {
        return setError('Invalid credentials');
      }

      await closeEvent();
      await delayLogin();
      const user = JSON.stringify(userInfo);
      await AsyncStorage.setItem('@user', user);
      dispatch(userAuthenticate());
    } catch (e) {
      setError(e.message);
    }
  };

  const textInputHandler = (field, value) => {
    setForm(state => {
      return {
        ...state,
        [field]: value,
      };
    });
  };

  return (
    <Container>
      <Box>
        <Text size="lg">Use your credential</Text>
      </Box>
      {error && (
        <Box>
          <Text size="md" variant="danger">
            {error}
          </Text>
        </Box>
      )}
      <Box>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          autoCapitalize="none"
          onChangeText={text => textInputHandler('email', text)}
          returnKeyType="next"
          returnKeyLabel="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
      </Box>
      <Box>
        <TextInput
          ref={passwordRef}
          label="Password"
          placeholder="Enter your password"
          autoCapitalize="none"
          onChangeText={text => textInputHandler('password', text)}
          returnKeyType="done"
          returnKeyLabel="done"
          secureTextEntry
        />
      </Box>
      <Box>
        <Button title="Submit" onPress={submitHandler} />
      </Box>
    </Container>
  );
};

export default Login;
