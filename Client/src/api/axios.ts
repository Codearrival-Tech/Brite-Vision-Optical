import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Sheety API endpoints - using singular form (more common in Sheety)
// These should match your sheet tab names
export const API = {
  CONTACT: `${BASE_URL}/contact`,
  EYE_TEST: `${BASE_URL}/eyeTest`,
  BOOK_FRAME: `${BASE_URL}/bookFrame`,
  FEEDBACK: `${BASE_URL}/feedbacks`,
};

// Create axios instance with proper configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('📤 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('📥 API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error('Response Error:', {
      status: error.response?.status,
      url: error.response?.config?.url,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;