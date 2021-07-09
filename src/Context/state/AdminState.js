import React, { createContext, useContext, useReducer } from 'react';

import AdminReducer from '../reducers/AdminReducer';
import { adminLoginApi, getCustomerDataWIthDatesAPI } from '../../Api';
import {
	getAdminAccessSucess,
	getAdminAccessUnsucess,
	logOutAdminAccess,
	adminLoginLoading,
	adminLoginComplete,
	adminLogOut,
} from '../action/AdminAction';

const initialState = {
	adminLogin: false,
	loading: false,
	loginError: false,
	loginSucess: false,
	adminSucess: false,
};

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AdminReducer, initialState);

	const adminLogin = async (data) => {
		dispatch(adminLoginLoading());
		await adminLoginApi(data)
			.then((res) => {
				dispatch(adminLoginComplete());
				if (res.status === 200) {
					dispatch(getAdminAccessSucess());
				} else {
					dispatch(getAdminAccessUnsucess());
				}
			})
			.catch((err) => {
				dispatch(getAdminAccessUnsucess(err));
			});
	};

	const logout = () => {
		sessionStorage.removeItem('admin');
		dispatch(adminLogOut());
	};


	return (
		<AdminContext.Provider
			value={{
				admin: state.adminLogin,
				adminLogin,
				logout,
				loading: state.loading,
				loginError: state.loginError,
				loginSucess: state.loginSucess,
				adminSucess: state.adminSucess,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};
