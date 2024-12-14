import type { BaseButtonProps } from '@/components/base/Button/Button.types';
import { Button as MantineButton } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Button = memo(
  forwardRef<HTMLButtonElement, BaseButtonProps>(
    (props: BaseButtonProps, ref) => {
      return <MantineButton ref={ref} {...props} />;
    }
  )
);
