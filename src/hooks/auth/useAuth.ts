import { type LoginRequest, useLogin } from '@/hooks/api/auth/login';
import { useLogout } from '@/hooks/api/auth/logout';
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
  const loginApi = useLogin();
  const logoutApi = useLogout();
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
    try {
      const res = await loginApi.mutateAsync(req);
      setIsAuthenticated(true);
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // サインアップ処理
  const signup = async (req: SignupRequest): Promise<void> => {
    try {
      const res = await signupApi.mutateAsync(req);
      setIsAuthenticated(true);
      router.push('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  // ログアウト処理
  const logout = async () => {
    try {
      await logoutApi.mutateAsync({});
      setIsAuthenticated(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    isAuthenticated,
    login,
    signup,
    logout,
  };
};
