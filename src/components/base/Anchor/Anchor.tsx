import type { AnchorProps } from '@/components/base/Anchor/Anchor.types';
import { Anchor as MantineAnchor } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Anchor = memo(
  forwardRef<HTMLAnchorElement, AnchorProps>((props: AnchorProps, ref) => {
    return (
      <MantineAnchor ref={ref} {...props}>
        {props.children}
      </MantineAnchor>
    );
  })
);
