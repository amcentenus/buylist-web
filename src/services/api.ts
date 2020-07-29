import axios from 'axios';
import { toastError } from './Toast';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  toastError(error.response.data.message);
  console.log(error.response);
  return Promise.reject(error);
});

export default api;