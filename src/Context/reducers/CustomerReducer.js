import { customerAction } from '../action/CustomerAction';

export default (state, action) => {
	console.log(action.type);
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
			return { ...state, sucessfull: null, flip: false };
		case customerAction.CUSTOMER_SUCESSFULL:
			console.log(action.data, ',.');
			return { ...state, custData: action.data };
		default:
			return state;
	}
};
