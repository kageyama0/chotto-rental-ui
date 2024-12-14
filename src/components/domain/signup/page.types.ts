import type { UseFormReturnType } from '@mantine/form';
import type { SignupForm } from './page.schema';

export interface HooksType {
  form: UseFormReturnType<SignupForm>;
  error: string;
  isLoading: boolean;
  onSubmit: () => void;
}
