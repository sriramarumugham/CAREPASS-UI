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
const getProductsApi = async () => {
    return await client.get(API_ENDPOINTS.GET_PRODUCT);
};
export { createUserApi, getProductsApi };
