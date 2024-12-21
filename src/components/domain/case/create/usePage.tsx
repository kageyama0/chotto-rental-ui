import type { CreateCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { createCaseFormSchema } from '@/components/domain/case/create/page.schema';
import { useCreateCase } from '@/hooks/api/case/create';
import { createZodValidator } from '@/utils/form/validate';
import { showErrorNotification } from '@/utils/notification/showErrorNotification';
import { showSuccessNotification } from '@/utils/notification/showSuccessNotification';
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
      const response = await createCase.mutateAsync(values);
      const caseId = response.data.id;
      showSuccessNotification({
        message: '依頼を作成しました',
      });

      router.push(`/case/${caseId}`);
    } catch (error) {
      console.error(error);
      showErrorNotification({
        message: '依頼の作成に失敗しました',
      });
    }
  };

  return {
    form,
    back: () => router.back(),
    handleSubmit,
  };
};
