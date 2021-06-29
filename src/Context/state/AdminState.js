import React, { createContext, useContext, useReducer } from 'react';

import AdminReducer from '../reducers/AdminReducer';
import { adminLoginApi } from '../../Api';
import {
	getAdminAccessSucess,
	getAdminAccessUnsucess,
	logOutAdminAccess,
} from '../action/AdminAction';

const initialState = {
	adminLogin: false,
};

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AdminReducer, initialState);

	const adminLogin = async (data) => {
		await adminLoginApi()
			.then((res) => {
				if (res.status === 200) {
					dispatch(getAdminAccessSucess());
				}
			})
			.catch((err) => {
				dispatch(getAdminAccessUnsucess());
			});
	};

	return (
		<AdminContext.Provider
			value={{
				admin: state.adminLogin,
				adminLogin,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};
