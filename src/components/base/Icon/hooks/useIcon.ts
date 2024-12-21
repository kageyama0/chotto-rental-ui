import type { IconProps } from '@/components/base/Icon/types/Icon.types';
import {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_SIZE,
  ICON_SIZES,
  ICON_TYPE_COLORS,
} from '@/components/base/Icon/types/Icon.types';

export const useIcon = (props: IconProps) => {
  const color = props.color
    ? props.color
    : props.type
    ? ICON_TYPE_COLORS[props.type]
    : DEFAULT_ICON_COLOR;
  const size = props.size ? ICON_SIZES[props.size] : DEFAULT_ICON_SIZE;

  return {
    svg: {
      width: size,
      height: size,
    },
    path: {
      fill: color,
    },
  };
};
