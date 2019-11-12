import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT } from '../types';
import { AsyncStorage } from 'react-native';

export default async (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const result = await AsyncStorage.setItem('token', action.payload.token);
      if (result) console.log('[TOKEN_SET]');
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        businessName: action.payload.businessName
      };
    case LOGIN_FAIL:
    case LOGOUT:
      const error = await AsyncStorage.removeItem('token');
      if (!error) console.log('[TOKEN_REMOVED]');

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
