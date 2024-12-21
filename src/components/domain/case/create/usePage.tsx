import type { CreateCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { createCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { useCreateCase } from '@/hooks/api/case/create';
import { createZodValidator } from '@/utils/form/validate';
import { useForm as useMantineForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

export const usePage = () => {
  const router = useRouter();
  const createCase = useCreateCase();
  const initialValues: CreateCaseFormSchema = {
    title: '',
    description: '',
    category: '',
    reward: 1000,
    requiredPeople: 1,
    scheduledDate: '',
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
      const response = await createCase.mutateAsync(values);
      console.log('API response:', response);
      const caseId = response.data.id;
      // 成功時にリダイレクト
      router.push(`/case/${caseId}`);
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
