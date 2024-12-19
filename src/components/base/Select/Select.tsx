import type { SelectProps } from '@/components/base/Select/Select.types';
import { Select as MantineSelect } from '@mantine/core';
import { forwardRef, memo } from 'react';

export const Select = memo(
  forwardRef<HTMLInputElement, SelectProps>((props: SelectProps, ref) => {
    const { error, ...restProps } = props;

    return (
      <MantineSelect
        ref={ref}
        error={error}
        withAsterisk={props.required}
        {...restProps}
      />
    );
  }),
);
