import { forwardRef, memo } from 'react';
import type { BaseTypographyProps } from '@/components/base/Typography/Typography.types';

export const BaseTypography = memo(
  forwardRef<HTMLSpanElement, BaseTypographyProps>((props, ref) => {
    return (
      <span
        ref={ref}
        className={props.className}
        style={{ width: props.width }}
      >
        {props.children}
      </span>
    );
  }),
);
