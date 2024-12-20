import type { DateInputProps } from '@/components/base/DateInput/DateInput.types';
import { DateInput as MantineDateInput } from '@mantine/dates';
import { forwardRef, memo } from 'react';

export const DateInput = memo(
  forwardRef<HTMLInputElement, DateInputProps>((props: DateInputProps, ref) => {
    return <MantineDateInput ref={ref} {...props} />;
  }),
);
