import {
  CLEAR_ERRORS,
  ONE_DAY_CHECK_IN_LOADED,
  ONE_DAY_CHECK_IN_LOADED_FALIED
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ONE_DAY_CHECK_IN_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        oneDayCheckins: action.payload
      };
    case ONE_DAY_CHECK_IN_LOADED_FALIED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        oneDayCheckins: []
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null,
        oneDayCheckins: []
      };
    default:
      return state;
  }
};
