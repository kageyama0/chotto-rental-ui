import { z } from 'zod';

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: '有効なメールアドレスを入力してください' }),
  password: z
    .string()
    .min(8, { message: 'パスワードは8文字以上である必要があります' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: 'パスワードは少なくとも1つの大文字、小文字、数字を含む必要があります',
    }),
  confirmPassword: z
    .string()
    .min(1, { message: 'パスワードを再入力してください' }),
  username: z
    .string()
    .min(3, { message: 'ユーザー名は3文字以上である必要があります' })
    .max(50, { message: 'ユーザー名は50文字以下である必要があります' })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: 'ユーザー名は英数字、アンダースコア、ハイフンのみ使用できます',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'パスワードが一致しません',
  path: ['confirmPassword'],
});

export type SignupForm = z.infer<typeof signupSchema>;
