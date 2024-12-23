import { SIGNUP_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api } from '@/services/api/apiClient';
import { showErrorNotification } from '@/utils/notification/showErrorNotification';
import { showSuccessNotification } from '@/utils/notification/showSuccessNotification';

export interface SignupRequest {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupResponse extends ApiResponse<null> {}

// 認証関連のフック
export const useSignup = createMutationHook<SignupResponse, SignupRequest>(
  async (req: SignupRequest) => {
    return await api.post<SignupResponse, SignupRequest>(SIGNUP_API_PATH, req);
  },
  {
    onSuccess: () => {
      showSuccessNotification({ message: 'アカウントを作成しました' });
    },
    onError: () => {
      showErrorNotification({ message: 'アカウント作成に失敗しました' });
      throw new Error('Login failed');
    },
  },
);
