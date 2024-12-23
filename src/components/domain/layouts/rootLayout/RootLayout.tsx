'use client';

import { Header } from '@/components/domain/layouts/rootLayout/header/Header';
import { AppShell } from '@mantine/core';

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
