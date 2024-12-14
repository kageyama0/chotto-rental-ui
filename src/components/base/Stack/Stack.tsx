import type { StackProps as MantineStackProps } from "@mantine/core";
import { Stack as MantineStack } from "@mantine/core";
import { forwardRef, memo } from "react";

export type StackProps = MantineStackProps;

export const Stack = memo(
  forwardRef<HTMLDivElement, StackProps>((props: StackProps, ref) => (
    <MantineStack ref={ref} {...props}>
      {props.children}
    </MantineStack>
  ))
);
