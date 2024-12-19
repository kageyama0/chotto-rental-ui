import {
  type SignupForm,
  signupSchema,
} from '@/components/domain/Signup/page.schema';
import type { HooksType } from '@/components/domain/Signup/page.types';
import { useAuth } from '@/hooks/auth/useAuth';
import { useForm as useMantineForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';

export const useSignupForm = (): HooksType => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const form = useMantineForm<SignupForm>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    },
    validate: (values) => {
      try {
        signupSchema.parse(values);
        return {};
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.errors.reduce(
            (acc, curr) => {
              const path = curr.path[0] as string;
              acc[path] = curr.message;
              return acc;
            },
            {} as Record<string, string>,
          );
        }
        return {};
      }
    },
  });

  const handleSubmit = async (values: SignupForm) => {
    try {
      setIsLoading(true);
      setError('');

      const validatedData = signupSchema.parse(values);
      await signup(validatedData);

      setIsLoading(false);
      router.push('/login');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError('入力内容を確認してください');
      } else {
        setError(err instanceof Error ? err.message : '登録に失敗しました');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = form.onSubmit((values) => {
    handleSubmit(values);
  });

  return {
    form,
    error,
    isLoading,
    onSubmit,
  };
};
