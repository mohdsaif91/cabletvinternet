export const customerAction = {
	ADD_CUSTOMER_SUESSFULL: 'ADD_CUSTOMER_SUESSFULL',
	ADD_CUSTOMER_UNSUESSFULL: 'ADD_CUSTOMER_UNSUESSFULL',
	ADDING_CUSTOMER: 'ADDING_CUSTOMER',
	ADDED_CUSTOMER: 'ADDED_CUSTOMER',
};

export function addCustomerSucessfull(data) {
	return {
		type: customerAction.ADD_CUSTOMER,
		data,
	};
}

export function addedCustomer() {
	return {
		type: customerAction.ADDED_CUSTOMER,
	};
}

export function addingCustomer() {
	return {
		type: customerAction.ADDING_CUSTOMER,
	};
}

export function addCustomerUnSucessfull(data) {
	return {
		type: customerAction.ADD_CUSTOMER_UNSUESSFULL,
		data,
	};
}
