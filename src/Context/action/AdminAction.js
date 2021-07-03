export const AdminAction = {
	GET_ADMIN_ACCESS_SUCESS: 'GET_ADMIN_ACCESS_SUCESS',
	LOG_OUT_ADMIN_ACCESS: 'LOG_OUT_ADMIN_ACCESS',
	GET_ADMIN_ACCESS_UN_SUCESS: 'GET_ADMIN_ACCESS_UN_SUCESS',
	ADMIN_LOGIN_LOADING: 'ADMIN_LOGIN_LOADING',
	ADMIN_LOGIN_COMPLETE: 'ADMIN_LOGIN_COMPLETE',
	ADMIN_LOG_OUT: 'ADMIN_LOG_OUT',
};

export function getAdminAccessSucess() {
	return {
		type: AdminAction.GET_ADMIN_ACCESS_SUCESS,
	};
}
export function getAdminAccessUnsucess(data) {
	return {
		type: AdminAction.GET_ADMIN_ACCESS_UN_SUCESS,
		data,
	};
}

export function logOutAdminAccess() {
	return {
		type: AdminAction.LOG_OUT_ADMIN_ACCESS,
	};
}

export function adminLoginLoading() {
	return {
		type: AdminAction.ADMIN_LOGIN_LOADING,
	};
}

export function adminLoginComplete() {
	return {
		type: AdminAction.ADMIN_LOGIN_COMPLETE,
	};
}

export function adminLogOut() {
	return {
		type: AdminAction.ADMIN_LOG_OUT,
	};
}
