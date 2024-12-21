export interface IconProps {
  /**
   * NOTE:
   * 外から指定するときは type="info" size="m" のように値を文字列で直接指定する（簡単なので）
   */
  type?: IconType;
  size?: IconSize;
  color?: string;
}

export interface HooksType {
  svg: {
    width: string;
    height: string;
  };
  path: {
    fill: string;
  };
}

/**
 * Color
 */
export const ICON_TYPE_COLORS = {
  default: 'var(--color--icon-default)',
  active: 'var(--color--icon-active)',
  link: 'var(--color--icon-link)',
  input: 'var(--color--icon-input)',
  disable: 'var(--color--icon-disable)',
  light: 'var(--color--icon-light)',
  /* system color */
  info: 'var(--color--icon-info)',
  success: 'var(--color--icon-success)',
  warning: 'var(--color--icon-warning)',
  error: 'var(--color--icon-error)',
} as const;
export const DEFAULT_ICON_COLOR = ICON_TYPE_COLORS.default;

type IconType = keyof typeof ICON_TYPE_COLORS;

/**
 * Size
 */
export const ICON_SIZES = {
  xs: '1rem', // var(--size--icon-xs) 16px
  s: '1.25rem', // var(--size--icon-s) 20px
  m: '1.5rem', // var(--size--icon-m) 24px
  l: '2.5rem', // var(--size--icon-l) 40px
} as const;
export const DEFAULT_ICON_SIZE = ICON_SIZES.m;

type IconSize = keyof typeof ICON_SIZES;
