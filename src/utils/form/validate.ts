// utils/form.ts
import { z } from 'zod';

/**
 * Zodのバリデーションエラーを Mantine の useForm 用のエラー形式に変換
 */
export const zodErrorToMantine = <T>(
  error: unknown,
): Partial<Record<keyof T, string>> => {
  if (error instanceof z.ZodError) {
    return error.errors.reduce((acc: Partial<Record<keyof T, string>>, curr) => {
      const path = curr.path.join('.') as keyof T;
      acc[path] = curr.message;
      return acc;
    }, {});
  }
  return {};
};

/**
 * Zod スキーマを Mantine の useForm のバリデーション関数に変換
 */
export const createZodValidator = <T>(schema: z.ZodSchema) => {
  return (values: unknown) => {
    try {
      schema.parse(values);
      return {};
    } catch (error) {
      return zodErrorToMantine<T>(error);
    }
  };
};
