/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screens/auth/Landing';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Landing" component={Landing} />
    </AuthStack.Navigator>
  );
};
