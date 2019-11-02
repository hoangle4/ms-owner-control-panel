import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT } from '../types';
import { AsyncStorage } from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
    case LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
