import React, { createContext, useContext, useReducer } from 'react';
import { addCustomerApi } from '../../Api';
import {
	addCustomerSucessfull,
	addCustomerUnSucessfull,
	addingCustomer,
	addedCustomer,
} from '../action/CustomerAction';

import CustomerReducer from '../reducers/CustomerReducer';

const initialState = { error: false, loading: false };
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CustomerReducer, initialState);

	const addCustomer = async (data) => {
		dispatch(addingCustomer());
		await addCustomerApi(data)
			.then((res) => {
				dispatch(addedCustomer());
				if (res.status === 201) {
					dispatch(addCustomerSucessfull(res.data));
				} else {
					dispatch(addCustomerUnSucessfull(res.data));
				}
			})
			.catch((err) => dispatch(addCustomerUnSucessfull(err)));
	};

	return (
		<CustomerContext.Provider
			value={{
				addCustomer,
				addError: state.error,
				loading: state.loading,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
};
