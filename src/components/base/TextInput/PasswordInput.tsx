import {
  PasswordInput as MantinePasswordInput,
  type PasswordInputProps as MantinePasswordInputProps,
} from '@mantine/core';
import { forwardRef, memo } from 'react';

export type PasswordInputProps = MantinePasswordInputProps;

export const PasswordInput = memo(
  forwardRef<HTMLInputElement, PasswordInputProps>(
    (props: PasswordInputProps, ref) => {
      return <MantinePasswordInput ref={ref} {...props} />;
    }
  )
);
