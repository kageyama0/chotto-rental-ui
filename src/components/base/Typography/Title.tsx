import {
  Title as MantineTitle,
  type TitleProps as MantineTitleProps,
} from '@mantine/core';
import { forwardRef, memo } from 'react';

export type TitleProps = MantineTitleProps;

export const TitleLarge = memo(
  forwardRef<HTMLDivElement, TitleProps>((props: TitleProps, ref) => {
    return <MantineTitle ref={ref} {...props} />;
  })
);
