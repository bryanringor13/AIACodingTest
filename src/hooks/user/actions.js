import {SET_USER_LOADING, USER_AUTHENTICATED, USER_LOGOUT} from './types';

export const setLoading = () => {
  return {
    type: SET_USER_LOADING,
  };
};

export const userAuthenticate = () => {
  return {
    type: USER_AUTHENTICATED,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
