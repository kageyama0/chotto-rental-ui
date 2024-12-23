import { HTTP_CODE } from '@/const/httpStatusCode';
import { type LoginRequest, useLoginMutation } from '@/hooks/api/auth/login';
import { useLogoutMutation } from '@/hooks/api/auth/logout';
import { type SignupRequest, useSignup } from '@/hooks/api/auth/signup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HooksType {
  isAuthenticated: boolean;
  login: (req: LoginRequest) => Promise<void>;
  signup: (req: SignupRequest) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = (): HooksType => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const loginApi = useLoginMutation();
  const logoutApi = useLogoutMutation();
  const signupApi = useSignup();

  // cookieにsession_idがあるかどうかで認証状態を判定
  const checkAuth = () => {
    try {
      const sessionId = Cookies.get('session_id');
      setIsAuthenticated(!!sessionId);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  // ログイン処理
  const login = async (req: LoginRequest): Promise<void> => {
    await loginApi.mutateAsync(req);
    setIsAuthenticated(true);
    router.push('/');
  };

  // サインアップ処理
  const signup = async (req: SignupRequest): Promise<void> => {
    await signupApi.mutateAsync(req);
    setIsAuthenticated(true);
    router.push('/');
  };

  // ログアウト処理
  const logout = async () => {
    router.push('/login');
    await logoutApi.mutateAsync(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    signup,
    logout,
  };
};
