import React, { createContext, useContext, useReducer } from 'react';
import { addCustomerApi } from '../../Api';

import CustomerReducer from '../reducers/CustomerReducer';

const initialState = {};
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CustomerReducer);

	const addCustomer = async (data) => {
		await addCustomerApi(data).then((res) => {});
	};

	return (
		<CustomerContext.Provider
			value={{
				addCustomer,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
};
