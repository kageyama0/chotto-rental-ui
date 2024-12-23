'use client';

import {
  type LoginFormSchema,
  loginSchema,
} from '@/components/domain/login/page.schema';
import { useAuth } from '@/hooks/auth/useAuth';
import { useForm as useMantineForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const usePage = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const form = useMantineForm<LoginFormSchema>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async (values: LoginFormSchema) => {
    setLoading(true);
    setError('');
    try {
      await login(values);
      router.push('/');
    } catch (error) {
      setError(
        'ログインに失敗しました。メールアドレスとパスワードを確認してください。',
      );
    } finally {
      setLoading(false);
    }
  };

  return { form, isLoading, error, handleSubmit };
};
