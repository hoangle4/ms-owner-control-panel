import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT } from '../types';
import { AsyncStorage } from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', action.payload.token)
        .then(t => console.log('t_set'))
        .catch(err => console.log(err));
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        businessName: action.payload.businessName
      };
    case LOGIN_FAIL:
    case LOGOUT:
      AsyncStorage.removeItem('token')
        .then(t => console.log('t_removed'))
        .catch(err => console.log(err));

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
