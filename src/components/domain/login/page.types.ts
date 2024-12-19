import type { LoginFormSchema } from '@/components/domain/Login/page.schema';
import type { UseFormReturnType } from '@mantine/form';

export interface HooksType {
  form: UseFormReturnType<LoginFormSchema>;
  loading: boolean;
  error: string;
  handleSubmit: () => void;
}
