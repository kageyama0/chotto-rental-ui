import { useGetUserProfileAPI } from '@/hooks/api/user/get';
import { useRouter } from 'next/navigation';

export const usePage = () => {
  const router = useRouter();
  const { data: profile, isLoading } = useGetUserProfileAPI();

  return {
    router,
    profile,
    isLoading,
  };
}
