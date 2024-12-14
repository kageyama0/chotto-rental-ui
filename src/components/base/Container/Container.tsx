import { Container as MantineContainer } from "@mantine/core";
import { forwardRef, memo } from "react";
import type { ContainerProps as MantineContainerProps } from "@mantine/core";

export type ContainerProps = MantineContainerProps;

export const Container = memo(
  forwardRef<HTMLDivElement, ContainerProps>((props: ContainerProps, ref) => {
    return (
      <MantineContainer ref={ref} {...props}>
        {props.children}
      </MantineContainer>
    );
  })
);
