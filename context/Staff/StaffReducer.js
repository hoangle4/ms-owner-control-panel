import { CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCESS } from '../types';
export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false
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
