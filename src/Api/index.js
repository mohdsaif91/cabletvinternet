import Axios from 'axios';

// const url = 'http://localhost:5000';
const url = 'https://immense-dusk-33096.herokuapp.com';

// customer
export const addCustomerApi = (data) => Axios.post(`${url}/api/v1/customer/add`, data);
