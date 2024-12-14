import type { PaperProps } from '@/components/base/Paper/Paper.types';
import { Paper as MantinePaper } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Paper = memo(
  forwardRef<HTMLDivElement, PaperProps>((props: PaperProps, ref) => {
    return (
      <MantinePaper ref={ref} {...props}>
        {props.children}
      </MantinePaper>
    );
  })
);
