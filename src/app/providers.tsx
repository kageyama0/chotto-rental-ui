"use client";

import { theme } from "@/app/theme";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
