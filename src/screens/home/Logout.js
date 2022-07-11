/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View} from 'react-native';
import {Link, Text} from '../../components';
import {UserData} from '../../hooks/user';
import {userLogout} from '../../hooks/user/actions';

const Logout = () => {
  const dispatch = UserData()[1];

  const logoutHandler = () => {
    AsyncStorage.clear().then(() => {
      dispatch(userLogout());
    });
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10,
      }}>
      <Link onPress={logoutHandler}>
        <Text variant="link">Logout</Text>
      </Link>
    </View>
  );
};

export default Logout;
