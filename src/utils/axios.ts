import axios from 'axios';
import { AuthResponse } from '../types/auth';

export const API_URL = 'http://localhost:3001';

export const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 1000,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}/auth/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem('token', response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log('Не авторизований');
      }
    }
    throw error;
  }
);

export default instance;
