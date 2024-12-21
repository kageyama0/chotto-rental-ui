import {
  Center as MantineCenter,
  createPolymorphicComponent,
} from '@mantine/core';
import { forwardRef, memo } from 'react';
import type { CenterProps as MantineCenterProps } from '@mantine/core';

export type CenterProps = MantineCenterProps;

const _Center = memo(
  forwardRef<HTMLDivElement, CenterProps>((props: CenterProps, ref) => {
    return <MantineCenter ref={ref} {...props} />;
  }),
);

export const Center = createPolymorphicComponent<'div', CenterProps>(_Center);
