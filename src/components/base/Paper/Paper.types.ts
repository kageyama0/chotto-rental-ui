import type { PaperProps as MantinePaperProps } from '@mantine/core';

export interface PaperProps extends MantinePaperProps {
  children: React.ReactNode;
}
