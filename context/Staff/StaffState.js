import React, { useReducer, useEffect } from 'react';
import StaffContext from './StaffContext';
import StaffReducer from './StaffReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  USER_LOAD_FAILED
} from '../types';
import api from '../../api';
import setAuthToken from '../../utils/setAuthToken';
import { AsyncStorage } from 'react-native';
const StaffState = props => {
  const initialState = {
    staff: [],
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(StaffReducer, initialState);

  useEffect(() => {
    getStaff();
  }, []);

  const getStaff = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }

    try {
      const result = await api.getStaff();
      if (result) dispatch({ type: USER_LOADED, payload: result.data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: USER_LOAD_FAILED, payload: error.response.data });
    }
  };

  const addStaff = async formData => {
    console.log(formData);
    try {
      const result = await api.addStaff(formData);
      if (result) dispatch({ type: REGISTER_SUCCESS });
      getStaff();
    } catch (error) {
      console.log(error.message);
      dispatch({ type: REGISTER_FAIL });

      setTimeout(() => {
        clearErrors();
      }, 5000);
    }
  };
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <StaffContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        clearErrors,
        addStaff
      }}
    >
      {props.children}
    </StaffContext.Provider>
  );
};

export default StaffState;
