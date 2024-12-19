import type { GroupProps } from '@/components/base/Group/Group.types';
import { Group as MantineGroup } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Group = memo(
  forwardRef<HTMLDivElement, GroupProps>((props: GroupProps, ref) => {
    return <MantineGroup ref={ref} {...props} />;
  })
);
