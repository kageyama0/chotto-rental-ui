import type { TextProps } from '@/components/base/Typography/Typography.types';
import { Text as MantineText } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Text = memo(
  forwardRef<HTMLDivElement, TextProps>((props: TextProps, ref) => {
    return (
      <MantineText ref={ref} {...props}>
        {props.children}
      </MantineText>
    );
  })
);
