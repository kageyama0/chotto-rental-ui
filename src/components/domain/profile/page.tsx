'use client';

import { Avatar } from '@/components/base/Avatar/Avatar';
import { Button } from '@/components/base/Button/Button';
import { Card } from '@/components/base/Card/Card';
import { Container } from '@/components/base/Container/Container';
import { Group } from '@/components/base/Group/Group';
import { LoadingOverlay } from '@/components/base/LoadingOverlay/LoadingOverlay';
import { Stack } from '@/components/base/Stack/Stack';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { usePage } from '@/components/domain/profile/usePage';

export const ProfilePage = () => {
  const { router, profile: _, isLoading } = usePage();

  const profile = {
    name: 'テストユーザー',
    email: 'example@gmail.com',
    avatar: 'https://source.unsplash.com/random',
  };

  // if (!profile) {
  //   return <div>プロフィールが見つかりません</div>;
  // }

  return (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        <Title order={1}>プロフィール</Title>

        <LoadingOverlay visible={isLoading} />

        <Card withBorder>
          <Stack gap="xl">
            {/* プロフィールヘッダー */}
            <Group>
              <Avatar src={profile?.avatar} size="xl" radius="xl" />
              <Stack gap="xs">
                <Title order={2}>{profile.name}</Title>
                <Text c="dimmed">{profile.email}</Text>
              </Stack>
            </Group>

            {/* プロフィール情報 */}
            <Stack gap="md">
              <Title order={3} size="h4">
                基本情報
              </Title>

              <Stack gap="sm">
                <Group gap="md">
                  <Text fw={500} size="sm" w={120}>
                    名前
                  </Text>
                  <Text>{profile?.name}</Text>
                </Group>

                <Group gap="md">
                  <Text fw={500} size="sm" w={120}>
                    メールアドレス
                  </Text>
                  <Text>{profile?.email}</Text>
                </Group>

                {/* 他のプロフィール情報 */}
              </Stack>
            </Stack>

            {/* アクションボタン */}
            <Group justify="flex-end">
              <Button
                variant="light"
                onClick={() => router.push('/profile/edit')}
              >
                編集する
              </Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
