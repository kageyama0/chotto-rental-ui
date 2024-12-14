import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { forwardRef, memo } from "react";

export type ButtonProps = MantineButtonProps;

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    return <MantineButton ref={ref} {...props} />;
  })
);
