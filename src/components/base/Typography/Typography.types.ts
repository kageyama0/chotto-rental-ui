export interface BaseTypographyProps {
  className: string;
  width?: string | number;
  children: React.ReactNode;
}

export interface TypographyProps {
  /**
   * Typographyコンポーネント側で定義されているスタイルは上書きできません。
   */
  className?: string;
  children: React.ReactNode;
}

export interface TruncatedTypographyProps extends TypographyProps {
  width?: string | number;
}
