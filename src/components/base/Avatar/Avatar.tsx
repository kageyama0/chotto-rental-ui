import type { AvatarProps } from '@/components/base/Avatar/Avatar.types';
import { Avatar as MantineAvatar } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Avatar = memo(
  forwardRef<HTMLDivElement, AvatarProps>((props: AvatarProps, ref) => {
    return <MantineAvatar ref={ref} {...props} />;
  })
);
