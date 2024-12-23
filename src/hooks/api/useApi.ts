import {
  type UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';

const defaultQueryOptions = {
  refetchOnWindowFocus: false,
  retry: 1,
  staleTime: 1000 * 60 * 5, // TODO: constで定義する？
};

// 共通のクエリフック作成関数
// biome-ignore lint: any
export function createQueryHook<TResponse, TParams extends any[] = []>(
  key: string | string[],
  fetcher: (...params: TParams) => Promise<TResponse>,
  options?: {
    onError?: (error: AxiosError) => void;
  },
) {
  return (...params: TParams) => {
    return useQuery<TResponse, AxiosError>({
      queryKey: Array.isArray(key) ? [...key, ...params] : [key, ...params],
      queryFn: () => fetcher(...params),
      ...defaultQueryOptions,
      ...options,
    });
  };
}

// 共通のミューテーションフック作成関数
export function createMutationHook<TResponse, TRequest>(
  mutationFn: (variables: TRequest) => Promise<TResponse>,
  options?: UseMutationOptions<TResponse, AxiosError, TRequest>,
) {
  return () => {
    return useMutation<TResponse, AxiosError, TRequest>({
      mutationFn,
      ...options,
    });
  };
}
