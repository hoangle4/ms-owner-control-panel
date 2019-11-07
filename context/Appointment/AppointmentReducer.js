import { CLEAR_ERRORS, SET_TODAY, SET_DATE, TOGGLE_DATE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				date: action.payload,
				isDatePickerVisible: false,
				loading: false
			};
		case SET_TODAY:
			return {
				...state,
				date: new Date(),
				isDatePickerVisible: false,
				loading: false
			};
		case TOGGLE_DATE:
			return {
				...state,
				isDatePickerVisible: !state.isDatePickerVisible,
				loading: false
			};
		case CLEAR_ERRORS:
			return {
				...state,
				loading: false,
				error: null
			};
		default:
			return state;
	}
};
