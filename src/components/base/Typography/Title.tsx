import { BaseTypography } from "@/components/base/Typography/BaseTypography";
import type {
  TruncatedTypographyProps,
  TypographyProps,
} from "@/components/base/Typography/Typography.types";
import typographyClasses from "@/components/base/Typography/styles/Typography.module.css";
import { forwardRef, memo } from "react";

export const TitleLargeSingleLine = memo(
  forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
    return (
      <BaseTypography
        ref={ref}
        className={`${props.className ?? ""} ${
          typographyClasses.titleLargeSingleLine
        }`}
      >
        {props.children}
      </BaseTypography>
    );
  })
);

export const TitleLargeMultiLine = memo(
  forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
    return (
      <BaseTypography
        ref={ref}
        className={`${props.className ?? ""} ${
          typographyClasses.titleLargeMultiLine
        }`}
      >
        {props.children}
      </BaseTypography>
    );
  })
);

export const TitleMediumSingleLine = memo(
  forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
    return (
      <BaseTypography
        ref={ref}
        className={`${props.className ?? ""} ${
          typographyClasses.titleMediumSingleLine
        }`}
      >
        {props.children}
      </BaseTypography>
    );
  })
);

export const TitleMediumTruncatedSingleLine = memo(
  forwardRef<HTMLSpanElement, TruncatedTypographyProps>((props, ref) => {
    return (
      <BaseTypography
        ref={ref}
        className={`${props.className ?? ""} ${
          typographyClasses.titleMediumTruncatedSingleLine
        }`}
        width={props.width}
      >
        {props.children}
      </BaseTypography>
    );
  })
);

export const TitleSmallSingleLine = memo(
  forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
    return (
      <BaseTypography
        ref={ref}
        className={`${props.className ?? ""} ${
          typographyClasses.titleSmallSingleLine
        }`}
      >
        {props.children}
      </BaseTypography>
    );
  })
);
