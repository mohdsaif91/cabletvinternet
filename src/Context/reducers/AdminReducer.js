import { AdminAction } from '../action/AdminAction';

export default (state, action) => {
	switch (action.type) {
		case AdminAction.GET_ADMIN_ACCESS_SUCESS:
			return {
				...state,
			};
		case AdminAction.GET_ADMIN_ACCESS_UN_SUCESS:
			return {
				...state,
			};
		case AdminAction.LOG_OUT_ADMIN_ACCESS:
			return {
				...state,
			};
		default:
			return state;
	}
};
