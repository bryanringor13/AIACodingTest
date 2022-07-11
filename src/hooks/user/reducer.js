import {SET_USER_LOADING, USER_AUTHENTICATED, USER_LOGOUT} from './types';

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };

    case USER_LOGOUT:
      return {
        ...state,
        authenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};
