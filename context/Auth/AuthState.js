import React, { useReducer, useEffect } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { LOGIN_FAIL, LOGIN_SUCCESS, CLEAR_ERRORS, LOGOUT } from '../types';
import api from '../../api';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../../utils/setAuthToken';
const AuthState = props => {
  const initialState = {
    isAuthenticated: false,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    getAuthOwner();
  }, []);

  const getAuthOwner = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }

    try {
      const result = await api.getAuthOwner();
      if (result) dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data });
    }
  };

  const loginOwner = async formData => {
    try {
      const result = await api.loginOwner(formData);
      if (result) dispatch({ type: LOGIN_SUCCESS, payload: result.data });

      getAuthOwner();
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data });

      setTimeout(() => {
        clearErrors();
      }, 5000);
    }
  };

  const logOutOwner = () => dispatch({ type: LOGOUT });
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  console.log(state.error);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loginOwner,
        logOutOwner,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
