export const customerAction = {
	ADD_CUSTOMER_SUESSFULL: 'ADD_CUSTOMER_SUESSFULL',
	ADD_CUSTOMER_UNSUESSFULL: 'ADD_CUSTOMER_UNSUESSFULL',
};

export function addCustomerSucessfull(data) {
	return {
		type: customerAction.ADD_CUSTOMER,
		data,
	};
}

export function addCustomerUnSucessfull(data) {
	return {
		type: customerAction.ADD_CUSTOMER_UNSUESSFULL,
		data,
	};
}
