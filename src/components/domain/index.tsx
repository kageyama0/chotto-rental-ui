'use client';

import { Button } from '@/components/base/Button/Button';
import { Container } from '@/components/base/Container/Container';
import { Stack } from '@/components/base/Stack/Stack';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { CaseList } from '@/components/domain/case/list';
import { useRouter } from 'next/navigation';

export const HomePage = () => {
  const router = useRouter();
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl" align='center'>
        {/* ヒーローセクション */}
        <Stack gap="xs" align="center" py="xl">
          <Title order={1}>ちょっとした手伝いを、気軽に</Title>
          <Text c="dimmed" size="lg" ta="center">
            数分から数時間の短時間のお手伝いを
            <br />
            あなたの近くで見つけましょう
          </Text>
        </Stack>

        <Button
          size="lg"
          w="200"
          onClick={() => router.push('/case/create')}
          mt="sm"
        >
          依頼を作成する
        </Button>

        <CaseList />
      </Stack>
    </Container>
  );
};
