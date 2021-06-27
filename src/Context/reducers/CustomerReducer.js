import { customerAction } from '../action/CustomerAction';

export default (state, action) => {
	switch (action.type) {
		case customerAction.ADD_CUSTOMER_SUESSFULL:
			return { ...state, error: false };
		case customerAction.ADD_CUSTOMER_UNSUESSFULL:
			return { ...state, error: true, loading: false };
		case customerAction.ADDING_CUSTOMER:
			return { ...state, loading: true };
		case customerAction.ADDED_CUSTOMER:
			return { ...state, loading: false };
		default:
			return state;
	}
};
