export const customerAction = {
	ADD_CUSTOMER: 'ADD_CUSTOMER',
};

export function addCustomer(data) {
	return {
		type: customerAction.ADD_CUSTOMER,
		data,
	};
}
