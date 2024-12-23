import { LOGOUT_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api, queryClient } from '@/services/api/apiClient';
import { showErrorNotification } from '@/utils/notification/showErrorNotification';
import { showSuccessNotification } from '@/utils/notification/showSuccessNotification';

type LogoutRequest = null;
interface LogoutResponse extends ApiResponse<void> {}

const logout = async (): Promise<LogoutResponse> => {
  return api.post<LogoutResponse, LogoutRequest>(LOGOUT_API_PATH);
};

export const useLogoutMutation = createMutationHook<
  LogoutResponse,
  LogoutRequest
>(logout, {
  onSuccess: () => {
    showSuccessNotification({ message: 'ログアウトしました' });
    queryClient.invalidateQueries({ queryKey: ['user'] });
  },
  onError: () => {
    showErrorNotification({ message: 'ログアウトに失敗しました' });
  },
});
