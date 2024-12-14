import {
  Alert as MantineAlert,
  type AlertProps as MantineAlertProps,
} from "@mantine/core";
import { forwardRef, memo } from "react";

export type AlertProps = MantineAlertProps;

export const Alert = memo(
  forwardRef<HTMLDivElement, AlertProps>((props: AlertProps, ref) => {
    return <MantineAlert ref={ref} {...props} />;
  })
);
