import { DateInput as MantineDateInput } from '@mantine/dates';
import type { DateInputProps } from './DateInput.types';
import { forwardRef, memo } from 'react';

export const DateInput = memo(
  forwardRef<HTMLInputElement, DateInputProps>((props: DateInputProps, ref) => {
    return <MantineDateInput ref={ref} {...props} />;
  }),
);

DateInput.displayName = 'DateInput';
