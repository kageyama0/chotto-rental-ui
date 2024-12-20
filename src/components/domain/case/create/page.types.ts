import type { CreateCaseFormSchema } from '@/components/domain/case/create/page.schema';
import type { UseFormReturnType } from '@mantine/form';

export interface HooksType {
  form: UseFormReturnType<CreateCaseFormSchema>;
  router: () => void;
  handleSubmit: () => void;
}
