import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BASE_URL } from './api-endpoints';
import { useUserStore } from '../store/user-store';
// Create an Axios instance
const client = axios.create({
    baseURL: BASE_URL,
});

client.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Access Zustand store state directly
        const state = useUserStore.getState();
        const userState = state?.user;

        // Check if the user state has an auth token
        if (userState && state.getAuth()) {
            const token = state.getAuth();
            if (token) {
                // Ensure headers exist, then attach the token
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
client.interceptors.response.use(
    (response: AxiosResponse) => {
        // You can handle successful responses here
        return response.data;
    },
    (error: AxiosError) => {
        if (error.status == 401) {
            const state = useUserStore.getState();
            state.clearStore();
        }
        // Handle error responses here
        return Promise.reject(error?.response?.data || error.message);
    }
);

export default client;
