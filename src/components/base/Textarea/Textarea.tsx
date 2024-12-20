import { Textarea as MantineTextarea } from '@mantine/core';
import type { TextareaProps } from '@/components/base/Textarea/Textarea.types';
import { forwardRef, memo } from 'react';

export const Textarea = memo(
  forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props: TextareaProps, ref) => {
      return <MantineTextarea ref={ref} {...props} />;
    },
  ),
);
