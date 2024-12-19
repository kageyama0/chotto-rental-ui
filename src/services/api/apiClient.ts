import { QueryClient } from '@tanstack/react-query';
import axios, { type AxiosRequestConfig } from 'axios';

// APIの基本設定
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Cookieを送受信するための設定
});

// エラーハンドリング
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

// QueryClientの設定
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5分
    },
  },
});

// 共通のAPI関数
export const api = {
  // GET リクエスト
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    const response = await apiClient.get<T>(url, config);
    return response.data;
  },

  // POST リクエスト
  // biome-ignore lint:any
  post: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) => {
    const response = await apiClient.post<T>(url, data, config);
    return response.data;
  },

  // PUT リクエスト
  // biome-ignore lint:any
  put: async <T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) => {
    const response = await apiClient.put<T>(url, data, config);
    return response.data;
  },

  // DELETE リクエスト
  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    const response = await apiClient.delete<T>(url, config);
    return response.data;
  },
};
