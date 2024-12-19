import type { BadgeProps as MantineBadgeProps } from '@mantine/core';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps extends Omit<MantineBadgeProps, 'variant'> {
  variant?: BadgeVariant;
}
