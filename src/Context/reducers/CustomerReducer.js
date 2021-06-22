import { customerAction } from '../action/CustomerAction';

export default (state, action) => {
	switch (action.type) {
		case customerAction.ADD_CUSTOMER:
			return state;
		default:
			return state;
	}
};
