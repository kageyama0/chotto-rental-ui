import { Providers } from '@/app/providers';
import { RootLayout as Layout } from '@/components/domain/layouts/rootLayout/RootLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
