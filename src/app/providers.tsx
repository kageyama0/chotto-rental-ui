import { theme } from '@/app/theme';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
