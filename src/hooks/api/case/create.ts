import { CASE_API_PATH } from '@/const/apiPath';
import type { ApiResponse } from '@/hooks/api/types';
import { createMutationHook } from '@/hooks/api/useApi';
import { api, queryClient } from '@/services/api/apiClient';

export interface CreateCaseRequest {
  title: string; // max 100文字
  description: string; // max 2000文字
  category: string;
  reward: number; // 500 ~ 100000
  requiredPeople: number; // 1 ~ 10
  scheduledDate: string;
  startTime: string; // HH:mm形式
  duration: number; // 15 ~ 360分
  prefecture: string;
  city: string;
  address?: string; // オプショナル
}

interface CreateCaseResponse {
  id: string;
  title: string;
  description: string;
  category: string;
  reward: number;
  requiredPeople: number;
  scheduledDate: string;
  startTime: string;
  duration: number;
  prefecture: string;
  city: string;
  address: string;
  status: string;
}

interface CreateCaseResponseData {
  id: string;
  title: string;
  description: string;
  category: string;
  reward: number;
  requiredPeople: number;
  scheduledDate: string;
  startTime: string;
  duration: number;
  prefecture: string;
  city: string;
  address: string;
  status: string;
}

interface CreateCaseResponse extends ApiResponse<CreateCaseResponseData> {}

const createCase = async (): Promise<CreateCaseResponse> => {
  return api.post<CreateCaseResponse, CreateCaseRequest>(CASE_API_PATH);
};

export const useCreateCase = createMutationHook<
  CreateCaseResponse,
  CreateCaseRequest
>(createCase, {
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['case'] });
  },
});
