import { Providers } from "@/app/providers";
import { Container } from "@/components/base/Container/Container";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Container size="lg" py="xl">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
