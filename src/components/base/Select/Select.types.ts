import type {
  SelectProps as MantineSelectProps,
} from '@mantine/core';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends MantineSelectProps {}
