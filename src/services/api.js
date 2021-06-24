import axios from 'axios';

const api = axios.create({
  baseURL: 'https://labeninjas.herokuapp.com/',
  headers: {'Authorization': '443f858a-a927-422d-92b0-72fb5eeab0da'}
});

export default api;