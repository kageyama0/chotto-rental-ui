import type { GridColProps } from '@/components/base/Grid/Grid.types';
import { Grid as MantineGrid } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const GridCol = memo(
  forwardRef<HTMLDivElement, GridColProps>((props: GridColProps, ref) => {
    return <MantineGrid.Col ref={ref} {...props} />;
  }),
);
