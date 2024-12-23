import type {
  ApiResponse,
  Application,
  CreateMatchingRequest,
  CreateReviewRequest,
  Matching,
  Review,
  UpdateApplicationStatusRequest,
  UpdateUserRequest,
  User,
} from '@/hooks/api/types';
import { api, queryClient } from '@/services/api/apiClient';
import {
  type UseMutationOptions,
  type UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';

// 共通のクエリフック作成関数
// biome-ignore lint: any
export function createQueryHook<TResponse, TParams extends any[] = []>(
  key: string | string[],
  fetcher: (...params: TParams) => Promise<TResponse>,
) {
  return (...params: [...TParams, UseQueryOptions<TResponse, AxiosError>?]) => {
    const options = params[params.length - 1] as
      | UseQueryOptions<TResponse, AxiosError>
      | undefined;
    const fetcherParams = params.slice(0, -1) as TParams;

    return useQuery<TResponse, AxiosError>({
      queryKey: Array.isArray(key)
        ? [...key, ...fetcherParams]
        : [key, ...fetcherParams],
      queryFn: () => fetcher(...fetcherParams),
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

// // ユーザー関連のフック
// export const useUser = {
//   get: createQueryHook<User, [string]>(['users'], (userId) =>
//     api.get(`/users/${userId}`),
//   ),

//   update: createMutationHook<User, UpdateUserRequest>(
//     (data) => api.put('/users/me', data),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['users'] });
//       },
//     },
//   ),

//   delete: createMutationHook<void, void>(() => api.delete('/users/me')),
// };

// // 応募関連のフック
// export const useApplication = {
//   getAll: createQueryHook<Application[], []>(['applications'], () =>
//     api.get('/applications'),
//   ),

//   updateStatus: createMutationHook<
//     Application,
//     { applicationId: string; status: UpdateApplicationStatusRequest }
//   >(
//     ({ applicationId, status }) =>
//       api.put(`/applications/${applicationId}/status`, status),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['applications'] });
//       },
//     },
//   ),
// };

// // マッチング関連のフック
// export const useMatching = {
//   create: createMutationHook<
//     Matching,
//     { applicationId: string; data: CreateMatchingRequest }
//   >(
//     ({ applicationId, data }) =>
//       api
//         .post<ApiResponse<Matching>>(
//           `/applications/${applicationId}/matching`,
//           data,
//         )
//         .then((response) => response.data),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['applications'] });
//         queryClient.invalidateQueries({ queryKey: ['matchings'] });
//       },
//     },
//   ),

//   confirmArrival: createMutationHook<Matching, string>(
//     (matchingId) =>
//       api
//         .post<ApiResponse<Matching>>(`/matchings/${matchingId}/confirm-arrival`)
//         .then((response) => response.data),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['matchings'] });
//       },
//     },
//   ),
// };

// // レビュー関連のフック
// export const useReview = {
//   getAll: createQueryHook<Review[], [string?]>(['reviews'], (userId) =>
//     api.get('/reviews', { params: userId ? { user_id: userId } : undefined }),
//   ),

//   getByUser: createQueryHook<Review[], [string]>(
//     ['users', 'reviews'],
//     (userId) => api.get(`/users/${userId}/reviews`),
//   ),

//   create: createMutationHook<Review, CreateReviewRequest>(
//     (data) => api.post('/reviews', data),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['reviews'] });
//       },
//     },
//   ),
// };
