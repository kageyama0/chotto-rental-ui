import type { GridProps } from './Grid.types';
import { Grid as MantineGrid } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Grid = memo(
  forwardRef<HTMLDivElement, GridProps>((props: GridProps, ref) => {
    return <MantineGrid ref={ref} {...props} />;
  }),
);
