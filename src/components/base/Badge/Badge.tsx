import type {
  BadgeProps,
  BadgeVariant,
} from '@/components/base/Badge/Badge.types';
import { Badge as MantineBadge } from '@mantine/core';
import { forwardRef, memo } from 'react';

const getColorByVariant = (variant: BadgeVariant): string => {
  switch (variant) {
    case 'success':
      return 'green';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    case 'info':
      return 'blue';
    default:
      return 'gray';
  }
};

export const Badge = memo(
  forwardRef<HTMLDivElement, BadgeProps>((props: BadgeProps, ref) => {
    const { variant = 'default', ...restProps } = props;

    return (
      <MantineBadge ref={ref} {...restProps} color={getColorByVariant(variant)}>
        {props.children}
      </MantineBadge>
    );
  }),
);

Badge.displayName = 'Badge';
