export const API_ENDPOINTS = {
    USER: '/user',
    GET_OTP: '/user/get-otp',
    VALIDATE_OTP: '/user/validate-otp',
    GET_PRODUCT: '/master/product',
    PURCHASE: '/purchase',
    GET_TRANSACTION: '/transaction',
    ACTIVE_PLANS: '/user/active-plans',
    PURCHASE_HISTORY: '/user/active-plans',
};
export const BASE_URL = `${import.meta.env.VITE_API_ENDPOINT}`;
export const CALLBACK_BASE_URL = `${import.meta.env.VITE_CALLBACK_URL}`;
export const RAZORPAY_ID = `${import.meta.env.VITE_RAZORPAY_ID}`;
