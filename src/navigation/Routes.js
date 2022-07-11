/* eslint-disable react/react-in-jsx-scope */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {HomeNavigator} from './Home';
import {AuthNavigator} from './Auth';
import {UserData} from '../hooks/user';
import {setLoading, userAuthenticate} from '../hooks/user/actions';
import {Container, Text} from '../components';

export const RouterNavigator = () => {
  const [user, dispatch] = UserData();

  useEffect(() => {
    AsyncStorage.getItem('@user').then(res => {
      if (res) {
        dispatch(userAuthenticate());
      } else {
        dispatch(setLoading());
      }
    });
  }, [dispatch]);

  if (user.loading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }
  return (
    <NavigationContainer>
      {user.authenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
