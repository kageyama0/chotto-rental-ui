"use client";

import { usePage } from "@/components/domain/login/usePage";
import {
  Anchor,
  Button,
  Container,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";

export const LoginPage = () => {
  const { form, loading, error, handleSubmit } = usePage();

  return (
    <Container size={420} py={40}>
      <Title ta="center" mb={30}>
        ログイン
      </Title>

      <Paper radius="md" p="xl" withBorder pos="relative">
        <LoadingOverlay visible={loading} />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="メールアドレス"
              placeholder="your@email.com"
              required
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="パスワード"
              placeholder="パスワード"
              required
              {...form.getInputProps("password")}
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
              アカウントをお持ちでない方は{" "}
              <Anchor component={Link} href="/signup" size="sm">
                新規登録
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
