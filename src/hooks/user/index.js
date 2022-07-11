/* eslint-disable react/react-in-jsx-scope */
import React, {createContext, useContext, useReducer} from 'react';
import {userReducer} from './reducer';

const initialState = {
  authenticated: false,
  loading: true,
};

export const UserContext = createContext(initialState);
export const UserData = () => useContext(UserContext);

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={useReducer(userReducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};
