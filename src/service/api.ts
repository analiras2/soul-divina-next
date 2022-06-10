import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const { API_BASE_URL } = process.env;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response success ->', response);
    return response;
  },
  (error: AxiosError) => {
    console.log('Response error ->', error);
    return Promise.reject(error);
  }
);

export default api;
