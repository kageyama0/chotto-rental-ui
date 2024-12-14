import type { AnchorProps as MantineAnchorProps } from '@mantine/core';

export interface AnchorProps extends MantineAnchorProps {
  href: string;
  children: React.ReactNode;
}
