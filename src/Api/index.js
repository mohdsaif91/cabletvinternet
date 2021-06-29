import Axios from 'axios';

// const url = 'http://localhost:5000';
// const url = 'https://cabletvinternetserver.herokuapp.com';
const url = 'https://cabeltvinternetserver.herokuapp.com';

// customer
export const addCustomerApi = (data) => Axios.post(`${url}/v1/customer/add`, data);
export const adminLoginApi = (data) => Axios.post(`${url}/v1/admin/login`, data);
