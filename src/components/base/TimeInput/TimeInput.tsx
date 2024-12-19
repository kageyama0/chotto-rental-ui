import type { TimeInputProps } from '@/components/base/TimeInput/TimeInput.types';
import { TimeInput as MantineTimeInput } from '@mantine/dates';
import { forwardRef, memo } from 'react';

export const TimeInput = memo(
  forwardRef<HTMLInputElement, TimeInputProps>((props: TimeInputProps, ref) => {
    return <MantineTimeInput ref={ref} {...props} />;
  }),
);
