import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BASE_URL } from './api-endpoints';

// Create an Axios instance
const client = axios.create({
    baseURL: BASE_URL,
});

// Request interceptor
// client.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         const state = useUserStore.getState();
//         const userState = state?.user;

//         // Check if user state has an auth token
//         if (userState && userState.auth) {
//             const token = userState.auth;
//             if (token) {
//                 config.headers = config.headers || {};
//                 config.headers.Authorization = `Bearer ${token}`;
//             }
//         }

//         return config;
//     },
//     (error: AxiosError) => {
//         return Promise.reject(error);
//     }
// );

// // Response interceptor
// client.interceptors.response.use(
//     (response: AxiosResponse) => {
//         // You can handle successful responses here
//         return response.data;
//     },
//     (error: AxiosError) => {
//         // Handle error responses here
//         return Promise.reject(error?.response?.data || error.message);
//     }
// );

export default client;
