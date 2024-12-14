'use client';

import {
  type LoginFormSchema,
  loginSchema,
} from '@/components/domain/login/page.schema';
import { useForm as useMantineForm, zodResolver } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { login } from "@/lib/auth";

export const usePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const login = (values: LoginFormSchema) => {
    console.log('login', values);
  };

  const form = useMantineForm<LoginFormSchema>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async (values: LoginFormSchema) => {
    try {
      setLoading(true);
      setError('');
      await login(values);
      router.push('/'); // ログイン成功後はトップページへ
    } catch (error) {
      setError(
        'ログインに失敗しました。メールアドレスとパスワードを確認してください。'
      );
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, error, handleSubmit };
};
