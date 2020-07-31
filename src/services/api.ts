/* eslint-disable array-callback-return */
import axios from 'axios';
import { toastError } from './Toast';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use((response) => {
  return response;

}, (error) => {
  const { message } = error.response.data;
  if (message) {
    toastError(error.response.data.message);
  } else {
    error.response.data.error.errors.map((err: { message: string; }) => {
      toastError(err.message);
    })
  }
  return Promise.reject(error);
});

export default api;