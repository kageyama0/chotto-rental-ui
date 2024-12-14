import {
  Card as MantineCard,
  type CardProps as MantineCardProps,
} from "@mantine/core";
import { forwardRef, memo } from "react";

export type CardProps = MantineCardProps;

export const Card = memo(
  forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref) => {
    return <MantineCard ref={ref} {...props} />;
  })
);
