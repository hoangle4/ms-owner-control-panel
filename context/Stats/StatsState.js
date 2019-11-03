import React, { useReducer, useEffect, useContext } from 'react';
import StatsContext from './StatsContext';
import StatsReducer from './StatsReducer';
import {
  CLEAR_ERRORS,
  ONE_DAY_CHECK_IN_LOADED,
  ONE_DAY_CHECK_IN_LOADED_FALIED,
  ALL_CUSTOMER_LOADED
} from '../types';
import api from '../../api';
import AuthContext from '../Auth/AuthContext';
const StatsState = props => {
  const initialState = {
    oneDayCheckins: [],
    allCustomers: [],
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(StatsReducer, initialState);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.isAuthenticated && getOneDayCheckIn();
    authContext.isAuthenticated && getAllCustomer();
  }, [authContext.isAuthenticated]);

  const getOneDayCheckIn = async () => {
    try {
      const result = await api.getOneDayCheckIn();
      if (result) {
        dispatch({ type: ONE_DAY_CHECK_IN_LOADED, payload: result.data });
      }
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: ONE_DAY_CHECK_IN_LOADED_FALIED,
        payload: error.response.data
      });
    }
  };

  const getAllCustomer = async () => {
    try {
      const result = await api.getAllCustomer();
      dispatch({
        type: ALL_CUSTOMER_LOADED,
        payload: result.data
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: ONE_DAY_CHECK_IN_LOADED_FALIED,
        payload: error.response.data
      });
    }
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <StatsContext.Provider
      value={{
        oneDayCheckins: state.oneDayCheckins,
        allCustomers: state.allCustomers,
        loading: state.loading,
        error: state.error
      }}
    >
      {props.children}
    </StatsContext.Provider>
  );
};

export default StatsState;
