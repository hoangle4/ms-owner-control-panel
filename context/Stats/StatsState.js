import React, { useReducer } from 'react';
import StatsContext from './StatsContext';
import StatsReducer from './StatsReducer';
import {
  CLEAR_ERRORS,
  ONE_DAY_CHECK_IN_LOADED,
  ONE_DAY_CHECK_IN_LOADED_FALIED
} from '../types';
import api from '../../api';
const StatsState = props => {
  const initialState = {
    oneDayCheckins: [],
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(StatsReducer, initialState);

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

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <StatsContext.Provider
      value={{
        oneDayCheckins: state.oneDayCheckins,
        loading: state.loading,
        error: state.error,
        getOneDayCheckIn
      }}
    >
      {props.children}
    </StatsContext.Provider>
  );
};

export default StatsState;
