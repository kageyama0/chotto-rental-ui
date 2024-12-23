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
  get: async <TResponse>(url: string, config?: AxiosRequestConfig) => {
    const response = await apiClient.get<TResponse>(url, config);
    return response.data;
  },

  // POST リクエスト
  post: async <TResponse, TRequest>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ) => {
    const response = await apiClient.post<TResponse>(url, data, config);
    return response.data;
  },

  // PUT リクエスト
  put: async <TResponse, TRequest>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ) => {
    const response = await apiClient.put<TResponse>(url, data, config);
    return response.data;
  },

  // DELETE リクエスト
  delete: async <TResponse>(url: string, config?: AxiosRequestConfig) => {
    const response = await apiClient.delete<TResponse>(url, config);
    return response.data;
  },
};
