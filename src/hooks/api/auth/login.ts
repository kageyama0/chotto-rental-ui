import { LOGIN_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api, queryClient } from '@/services/api/apiClient';

export interface LoginRequest {
  email: string;
  password: string;
}
type LoginResponseData = null;
interface LoginResponse extends ApiResponse<LoginResponseData> {}

const login = async (req: LoginRequest): Promise<LoginResponse> => {
  return await api.post<LoginResponse, LoginRequest>(LOGIN_API_PATH, req);
};

export const useLoginMutation = createMutationHook<LoginResponse, LoginRequest>(
  login,
  {
    onSuccess: () => {
      // ログイン成功時の処理（必要に応じて）
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  },
);
