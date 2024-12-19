import { LOGOUT_PATH } from '@/hooks/api/path';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api } from '@/services/api/apiClient';

export const useLogout = createMutationHook(() =>
  api.post<ApiResponse<null>>(LOGOUT_PATH).then((response) => {
    return response;
  }),
);
