import { Container } from '@/components/base/Container/Container';
import { Stack } from '@/components/base/Stack/Stack';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { CaseList } from '@/components/domain/case/page';

export const HomePage = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* ヒーローセクション */}
        <Stack gap="xs" align="center" py="xl">
          <Title order={1}>ちょっとした手伝いを、気軽に</Title>
          <Text c="dimmed" size="lg" ta="center">
            数分から数時間の短時間のお手伝いを
            <br />
            あなたの近くで見つけましょう
          </Text>
        </Stack>

        <CaseList />
      </Stack>
    </Container>
  );
};
