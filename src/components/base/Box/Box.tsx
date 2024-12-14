import { Box as MantineBox, createPolymorphicComponent } from '@mantine/core';
import { forwardRef, memo } from 'react';
import type { BoxProps as MantineBoxProps } from '@mantine/core';
import type { PropsWithChildren } from 'react';

export type BoxProps = MantineBoxProps;

export const _Box = memo(
  forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(
    (props: PropsWithChildren<BoxProps>, ref) => (
      <MantineBox ref={ref} {...props}>
        {props.children}
      </MantineBox>
    ),
  ),
);

export const Box = createPolymorphicComponent<'div', BoxProps>(_Box);
