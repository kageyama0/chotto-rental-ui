import { z } from 'zod';

export const createCaseFormSchema = z.object({
  title: z
    .string()
    .min(1, '依頼タイトルを入力してください')
    .max(100, 'タイトルは100文字以内で入力してください'),
  description: z
    .string()
    .min(1, '依頼内容を入力してください')
    .max(2000, '依頼内容は2000文字以内で入力してください'),
  category: z.string().min(1, 'カテゴリーを選択してください'),
  reward: z
    .number()
    .min(500, '報酬は500円以上で設定してください')
    .max(100000, '報酬は10万円以下で設定してください'),
  requiredPeople: z
    .number()
    .min(1, '募集人数は1人以上で設定してください')
    .max(10, '募集人数は10人以下で設定してください'),
  scheduledDate: z
    .date({
      required_error: '日付を選択してください',
      invalid_type_error: '有効な日付を選択してください',
    })
    .transform((date) => date.toISOString().split('T')[0]),
  startTime: z.string().min(1, '開始時間を入力してください'),
  duration: z
    .number()
    .min(15, '所要時間は15分以上で設定してください')
    .max(360, '所要時間は360分以下で設定してください'),
  prefecture: z.string().min(1, '都道府県を選択してください'),
  city: z.string().min(1, '市区町村を入力してください'),
  address: z.string(),
});

export type CreateCaseFormSchema = z.infer<typeof createCaseFormSchema>;
