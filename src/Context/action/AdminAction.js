export const AdminAction = {
	GET_ADMIN_ACCESS_SUCESS: 'GET_ADMIN_ACCESS_SUCESS',
	LOG_OUT_ADMIN_ACCESS: 'LOG_OUT_ADMIN_ACCESS',
	GET_ADMIN_ACCESS_UN_SUCESS: 'GET_ADMIN_ACCESS_UN_SUCESS',
};

export function getAdminAccessSucess() {
	return {
		type: AdminAction.GET_ADMIN_ACCESS_SUCESS,
	};
}
export function getAdminAccessUnsucess() {
	return {
		type: AdminAction.GET_ADMIN_ACCESS_UN_SUCESS,
	};
}

export function logOutAdminAccess() {
	return {
		type: AdminAction.LOG_OUT_ADMIN_ACCESS,
	};
}
