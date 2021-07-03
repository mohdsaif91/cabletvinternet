export const customerAction = {
	ADD_CUSTOMER_SUESSFULL: 'ADD_CUSTOMER_SUESSFULL',
	ADD_CUSTOMER_UNSUESSFULL: 'ADD_CUSTOMER_UNSUESSFULL',
	ADDING_CUSTOMER: 'ADDING_CUSTOMER',
	ADDED_CUSTOMER: 'ADDED_CUSTOMER',
	FLIP_TO_FORM: 'FLIP_TO_FORM',
	CUSTOMER_SUCESSFULL: 'CUSTOMER_SUCESSFULL',
	CUSTOMER_UN_SUCESSFULL: 'CUSTOMER_UN_SUCESSFULL',
};

export function addCustomerSucessfull(data) {
	return {
		type: customerAction.ADD_CUSTOMER_SUESSFULL,
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

export function flipToFormAction() {
	return {
		type: customerAction.FLIP_TO_FORM,
	};
}

export function getCustomerSucessfull(data) {
	return {
		type: customerAction.CUSTOMER_SUCESSFULL,
		data,
	};
}

export function getCustomerUnSucessfull() {
	return {
		type: customerAction.CUSTOMER_UN_SUCESSFULL,
	};
}
