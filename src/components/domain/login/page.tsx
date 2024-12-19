'use client';

import { Anchor } from '@/components/base/Anchor/Anchor';
import { Button } from '@/components/base/Button/Button';
import { Container } from '@/components/base/Container/Container';
import { Paper } from '@/components/base/Paper/Paper';
import { Stack } from '@/components/base/Stack/Stack';
import { PasswordInput } from '@/components/base/TextInput/PasswordInput';
import { TextInput } from '@/components/base/TextInput/TextInput';
import { Text } from '@/components/base/Typography/Text';
import { TitleLarge } from '@/components/base/Typography/Title';
import { usePage } from '@/components/domain/login/usePage';

export const LoginPage = () => {
  // TODO: 後でローディング時の挙動を追加する
  const { form, loading, error, handleSubmit } = usePage();

  return (
    <Container size={420} py={40}>
      <Paper radius="md" p="xl" withBorder pos="relative">
        <TitleLarge mb={40}>ログイン</TitleLarge>

        {/* <LoadingOverlay visible={loading} /> */}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="メールアドレス"
              placeholder="your@email.com"
              required
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="パスワード"
              placeholder="パスワード"
              required
              {...form.getInputProps('password')}
            />

            {error && (
              <Text c="red" size="sm">
                {error}
              </Text>
            )}

            <Button type="submit" fullWidth mt="xl">
              ログイン
            </Button>

            <Text c="dimmed" size="sm" ta="center" mt={5}>
              アカウントをお持ちでない方は{' '}
              <Anchor href="/signup" size="sm">
                新規登録
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
