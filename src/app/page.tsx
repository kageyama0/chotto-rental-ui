import { Providers } from "@/app/providers";
import { Container } from "@mantine/core";

export default function HomePage() {
  return (
    <Providers>
      <Container size="lg" py="xl">
        Home
      </Container>
    </Providers>
  );
}
