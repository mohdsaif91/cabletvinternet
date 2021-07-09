import { customerAction } from '../action/CustomerAction';

export default (state, action) => {
	switch (action.type) {
		case customerAction.ADD_CUSTOMER_SUESSFULL:
			return { ...state, error: false, sucessfull: true, flip: true };
		case customerAction.ADD_CUSTOMER_UNSUESSFULL:
			return { ...state, error: true, loading: false, sucessfull: false };
		case customerAction.ADDING_CUSTOMER:
			return { ...state, loading: true };
		case customerAction.ADDED_CUSTOMER:
			return { ...state, loading: false };
		case customerAction.FLIP_TO_FORM:
			return {
				...state,
				sucessfull: null,
				flip: false,
			};
		case customerAction.CUSTOMER_SUCESSFULL:
			return { ...state, custData: action.data };
		case customerAction.DATA_WITH_DATE_SUCESS:
			return {
				...state,
				custData: action.data,
				error: false,
			};
		case customerAction.DATA_WITH_DATE_FAIL:
			return { ...state, error: true };
		default:
			return state;
	}
};
