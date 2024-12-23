"use client";

import { Alert } from '@/components/base/Alert/Alert';
import { Box } from '@/components/base/Box/Box';
import { Button } from '@/components/base/Button/Button';
import { Card } from '@/components/base/Card/Card';
import { Container } from '@/components/base/Container/Container';
import { Stack } from '@/components/base/Stack/Stack';
import { TextInput } from '@/components/base/TextInput/TextInput';
import { Title } from '@/components/base/Typography/Title';
import { usePage } from '@/components/domain/signup/usePage';

export const SignupPage = () => {
  const { form, error, isLoading, onSubmit } = usePage();

  return (
    <Container size="xs">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Stack gap="md">
          <Title>ユーザー登録</Title>

          <form onSubmit={onSubmit}>
            <Stack mb={20} gap="md">
              <Box>
                <TextInput
                  id="displayName"
                  label="ユーザー名"
                  placeholder="ユーザー名"
                  {...form.getInputProps('displayName')}
                />
              </Box>

              <Box>
                <TextInput
                  id="email"
                  type="email"
                  label="メールアドレス"
                  placeholder="メールアドレス"
                  {...form.getInputProps('email')}
                />
              </Box>

              <Box>
                <TextInput
                  id="password"
                  type="password"
                  label="パスワード"
                  placeholder="パスワード"
                  {...form.getInputProps('password')}
                />
              </Box>

              <Box>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  label="パスワード(確認)"
                  placeholder="パスワード(確認)"
                  {...form.getInputProps('confirmPassword')}
                />
              </Box>

              {error && (
                <Alert color="red" title="エラー">
                  {error}
                </Alert>
              )}

              <Button mt={20} type="submit" loading={isLoading} fullWidth>
                登録する
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Container>
  );
};
