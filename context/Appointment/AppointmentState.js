import React, { useReducer, useEffect, useContext } from 'react';
import AppointmentContext from './AppointmentContext';
import AppointmentReducer from './AppointmentReducer';
import { CLEAR_ERRORS, SET_DATE, TOGGLE_DATE, SET_TODAY } from '../types';
import { Dimensions } from 'react-native';
import api from '../../api';
import AuthContext from '../Auth/AuthContext';
const AppointmentState = props => {
  const initialState = {
    date: new Date(),
    isDatePickerVisible: false,
    hour_size: Dimensions.get('window').height / 13.34,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(AppointmentReducer, initialState);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('appointState_loaded');
  }, [authContext.isAuthenticated]);

  const setDate = value => {
    try {
      dispatch({ type: SET_DATE, payload: value });
    } catch (error) {
      if (error) console.log(error.message);
    }
  };

  const setToday = () => dispatch({ type: SET_TODAY });

  const toggleDatePicker = () => dispatch({ type: TOGGLE_DATE });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AppointmentContext.Provider
      value={{
        date: state.date,
        isDatePickerVisible: state.isDatePickerVisible,
        hour_size: state.hour_size,
        loading: state.loading,
        error: state.error,
        setDate,
        setToday,
        toggleDatePicker
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentState;
