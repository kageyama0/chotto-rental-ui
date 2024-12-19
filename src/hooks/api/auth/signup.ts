import { SIGNUP_PATH } from '@/hooks/api/path';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api } from '@/services/api/apiClient';

export interface SignupRequest {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// 認証関連のフック
export const useSignup = createMutationHook((req: SignupRequest) => {
  return api.post<ApiResponse<null>>(SIGNUP_PATH, req).then((response) => {
    return response;
  });
});
