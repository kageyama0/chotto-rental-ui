import type { ButtonProps } from '@mantine/core';

export interface BaseButtonProps extends ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
