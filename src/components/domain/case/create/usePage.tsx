import type { CreateCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { createCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { createZodValidator } from '@/utils/form/validate';
import { useForm as useMantineForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

export const usePage = () => {
  const router = useRouter();
  const initialValues: CreateCaseFormSchema = {
    title: '',
    description: '',
    category: '',
    reward: 1000,
    requiredPeople: 1,
    date: new Date(),
    startTime: '',
    duration: 30,
    prefecture: '',
    city: '',
    address: '',
  };

  const form = useMantineForm<CreateCaseFormSchema>({
    initialValues,
    validate: createZodValidator<CreateCaseFormSchema>(createCaseFormSchema),
  });

  const handleSubmit = async (values: CreateCaseFormSchema) => {
    try {
      // API呼び出し
      console.log('Form submitted:', values);

      // notifications.show({
      //   title: '依頼を作成しました',
      //   message: '依頼の作成に成功しました',
      //   color: 'green',
      // });

      // 成功時にリダイレクト
      const case_id = '1';
      // router.push(`/case/${case_id}`);
    } catch (error) {
      // notifications.show({
      //   title: 'エラーが発生しました',
      //   message: '依頼の作成に失敗しました。もう一度お試しください。',
      //   color: 'red',
      // });
    }
  };

  return {
    form,
    back: () => router.back(),
    handleSubmit,
  };
};
