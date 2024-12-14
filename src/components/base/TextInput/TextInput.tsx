import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
} from '@mantine/core';
import { forwardRef, memo } from 'react';

export type TextInputProps = MantineTextInputProps;

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    return <MantineTextInput ref={ref} {...props} />;
  })
);
