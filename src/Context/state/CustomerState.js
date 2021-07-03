import React, { createContext, useContext, useReducer } from 'react';
import { addCustomerApi, getCustomerDataApi } from '../../Api';
import {
	addCustomerSucessfull,
	addCustomerUnSucessfull,
	addingCustomer,
	addedCustomer,
	flipToFormAction,
	getCustomerSucessfull,
	getCustomerUnSucessfull,
} from '../action/CustomerAction';

import CustomerReducer from '../reducers/CustomerReducer';

const initialState = { error: false, loading: false, sucessFull: null, flip: false, custData: [] };
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CustomerReducer, initialState);

	const addCustomer = async (data) => {
		dispatch(addingCustomer());
		await addCustomerApi(data)
			.then((res) => {
				dispatch(addedCustomer());
				if (res.status === 201) {
					dispatch(addCustomerSucessfull([]));
				} else {
					dispatch(addCustomerUnSucessfull(res.data));
				}
			})
			.catch((err) => dispatch(addCustomerUnSucessfull(err)));
	};

	const getCustomerData = async () => {
		await getCustomerDataApi()
			.then((res) => {
				if (res.status === 200) {
					dispatch(getCustomerSucessfull(res.data));
				}
			})
			.catch();
	};

	const flipToForm = () => {
		dispatch(flipToFormAction());
	};
	console.log(state.custData, ',.');

	return (
		<CustomerContext.Provider
			value={{
				addCustomer,
				flipToForm,
				getCustomerData,
				addError: state.error,
				loading: state.loading,
				sucess: state.sucessFull,
				flip: state.flip,
				custData: state.custData,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
};
