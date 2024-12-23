import { LOGOUT_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api, queryClient } from '@/services/api/apiClient';

type LogoutRequest = null;
interface LogoutResponse extends ApiResponse<null> {}

const logout = async (): Promise<LogoutResponse> => {
  return api.post<LogoutResponse, LogoutRequest>(LOGOUT_API_PATH);
};

export const useLogoutMutation = createMutationHook<
  LogoutResponse,
  LogoutRequest
>(logout, {
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['user'] });
  },
});
