  
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://labeninjas.herokuapp.com',
  headers: {'Authorization': 'jilit-molina'}
});

export default api;