import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'cyan',
  colors: {
    brand: [
      '#E3F2FD', // 0: 最も明るい
      '#BBDEFB',
      '#90CAF9',
      '#64B5F6', // 3: プライマリカラー
      '#42A5F5',
      '#2196F3',
      '#1E88E5',
      '#1976D2',
      '#1565C0',
      '#0D47A1', // 9: 最も暗い
    ],
  },

  fontFamily: '"Noto Sans JP", sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: '"M PLUS Rounded 1c", sans-serif',
    fontWeight: '600',
  },

  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
  },

  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.07)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.07)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.07)',
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
  },

  other: {
    layoutPadding: rem(24),
    transitionDuration: '200ms',
  },
});
