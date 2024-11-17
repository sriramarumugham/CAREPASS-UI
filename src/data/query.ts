import { API_ENDPOINTS } from './api-endpoints';
import client from './client';

export interface CreateUserBodyType {
    email: string;
    phoneNumber?: string; // Optional field
    name: string;
}
const createUserApi = async (data: CreateUserBodyType) => {
    return await client.post(API_ENDPOINTS.USER, data);
};

const getOtp = async (data: { email: string }) => {
    return await client.post(API_ENDPOINTS.GET_OTP, data);
};
const validateOTP = async (data: { email: string; otp: number }) => {
    return await client.post(API_ENDPOINTS.VALIDATE_OTP, data);
};

const getProductsApi = async () => {
    return await client.get(API_ENDPOINTS.GET_PRODUCT);
};

const postFormDataApi = async (formData: any) => {
    return await client.post(API_ENDPOINTS.PURCHASE, formData);
};

const fetchTransactionDetails = async (transactionId: string) => {
    return await client.get(
        `${API_ENDPOINTS.GET_TRANSACTION}/${transactionId}`
    );
};

const fetchActivePlans = async () => {
    return await client.get(API_ENDPOINTS.ACTIVE_PLANS);
};

const fetchPurchaseHistory = async () => {
    return await client.get(API_ENDPOINTS.PURCHASE_HISTORY);
};

const updateUserApi = async (userId: string, formData: any) => {
    return await client.put(`${API_ENDPOINTS.USER}/${userId}`, formData);
};

export {
    createUserApi,
    getProductsApi,
    postFormDataApi,
    fetchTransactionDetails,
    fetchActivePlans,
    fetchPurchaseHistory,
    updateUserApi,
    getOtp,
    validateOTP,
};
