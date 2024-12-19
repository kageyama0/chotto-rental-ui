import { NumberInput as MantineNumberInput } from '@mantine/core';
import { forwardRef, memo } from 'react';
import type { NumberInputProps } from '@/components/base/NumberInput/NumberInput.types';

export const NumberInput = memo(
  forwardRef<HTMLInputElement, NumberInputProps>(
    (props: NumberInputProps, ref) => {
      return <MantineNumberInput ref={ref} {...props} />;
    },
  ),
);

NumberInput.displayName = 'NumberInput';
