import React, { createContext, useContext, useReducer } from 'react';
import { addCustomerApi } from '../../Api';
import {
	addCustomerSucessfull,
	addCustomerUnSucessfull,
	addingCustomer,
	addedCustomer,
	flipToFormAction,
} from '../action/CustomerAction';

import CustomerReducer from '../reducers/CustomerReducer';

const initialState = { error: false, loading: false, sucessFull: null, flip: false };
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CustomerReducer, initialState);

	const addCustomer = async (data) => {
		dispatch(addingCustomer());
		// await addCustomerApi(data)
		// 	.then((res) => {
		dispatch(addedCustomer());
		// if (res.status === 201) {
		if (true) {
			dispatch(addCustomerSucessfull([]));
		} else {
			// dispatch(addCustomerUnSucessfull(res.data));
		}
		// })
		// .catch((err) => dispatch(addCustomerUnSucessfull(err)));
	};

	const flipToForm = () => {
		dispatch(flipToFormAction());
	};

	return (
		<CustomerContext.Provider
			value={{
				addCustomer,
				flipToForm,
				addError: state.error,
				loading: state.loading,
				sucess: state.sucessFull,
				flip: state.flip,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
};
