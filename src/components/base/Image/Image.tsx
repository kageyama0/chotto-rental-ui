import classes from '@/components/base/Image/Image.module.css';
import type { ImageProps as MantineImageProps } from '@mantine/core';
import { Image as MantineImage } from '@mantine/core';
import { forwardRef, memo } from 'react';

export type ImageProps = Omit<MantineImageProps, 'w' | 'h'> & {
  alt: string;
  width?: MantineImageProps['w'];
  height?: MantineImageProps['h'];
};

export const Image = memo(
  forwardRef<HTMLImageElement, ImageProps>((props: ImageProps, ref) => {
    const { width, height, className, ...rest } = props;

    return (
      <MantineImage
        ref={ref}
        {...rest}
        w={width}
        h={height}
        className={`${classes.image} ${className ?? ''}`}
      />
    );
  }),
);
