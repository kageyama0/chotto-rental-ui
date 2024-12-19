import { LOGIN_PATH } from '@/hooks/api/path';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api } from '@/services/api/apiClient';

export interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = createMutationHook((req: LoginRequest) =>
  api.post<ApiResponse<null>>(LOGIN_PATH, req).then((response) => {
    return response.data;
  }),
);
