import { customerAction } from '../action/CustomerAction';

export default (state, action) => {
	switch (action.type) {
		case customerAction.ADD_CUSTOMER_SUESSFULL:
			return state;
		case customerAction.ADD_CUSTOMER_UNSUESSFULL:
			return state;
		default:
			return state;
	}
};
