import { AdminAction } from '../action/AdminAction';

export default (state, action) => {
	switch (action.type) {
		case AdminAction.GET_ADMIN_ACCESS_SUCESS:
			return {
				...state,
				loginError: false,
				loginSucess: true,
				adminSucess: true,
			};
		case AdminAction.GET_ADMIN_ACCESS_UN_SUCESS:
			return {
				...state,
				loading: false,
				loginError: true,
				error: action.data,
				loginSucess: false,
				adminSucess: false,
			};
		case AdminAction.LOG_OUT_ADMIN_ACCESS:
			return {
				...state,
			};
		case AdminAction.ADMIN_LOGIN_LOADING:
			return {
				...state,
				loading: true,
			};
		case AdminAction.ADMIN_LOGIN_COMPLETE:
			return {
				...state,
				loading: false,
			};
		case AdminAction.ADMIN_LOG_OUT:
			return {
				...state,
				adminSucess: false,
				loginSucess: false,
			};
		default:
			return state;
	}
};
