import { useAuth } from '@/hooks/auth/useAuth';
import { useRouter } from 'next/navigation';

export const useHeader = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return {
    router,
    logout,
  };
};
