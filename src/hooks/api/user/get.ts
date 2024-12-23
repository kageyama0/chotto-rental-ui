import { USER_PROFILE_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createQueryHook } from '@/hooks/api/useApi';
import { api } from '@/services/api/apiClient';
import { showErrorNotification } from '@/utils/notification/showErrorNotification';

interface GetUserProfileResponseData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface GetUserProfileResponse
  extends ApiResponse<GetUserProfileResponseData> {}

const getUserProfile = async (): Promise<GetUserProfileResponse> => {
  return api.get<GetUserProfileResponse>(USER_PROFILE_API_PATH);
};

export const useGetUserProfileAPI = createQueryHook<GetUserProfileResponse>(
  ['user', 'profile'],
  getUserProfile,
  {
    onError: () => {
      showErrorNotification({ message: 'ユーザー情報の取得に失敗しました' });
    }
  }
);
