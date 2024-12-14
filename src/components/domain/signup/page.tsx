import { Alert } from "@/components/base/Alert/Alert";
import { Box } from "@/components/base/Box/Box";
import { Button } from "@/components/base/Button/Button";
import { Card } from "@/components/base/Card/Card";
import { Container } from "@/components/base/Container/Container";
import { Stack } from "@/components/base/Stack/Stack";
import { TextInput } from "@/components/base/TextInput/TextInput";
import { TitleLargeSingleLine } from "@/components/base/Typography/Title";
import { useSignupForm } from "@/components/domain/signup/usePage";

export const SignupPage = () => {
  const { form, error, isLoading, onSubmit } = useSignupForm();

  return (
    <Container size="xs">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Stack gap="md">
          <TitleLargeSingleLine>ユーザー登録</TitleLargeSingleLine>

          <form onSubmit={onSubmit}>
            <Stack gap="md">
              <Box>
                <TextInput
                  id="username"
                  label="ユーザー名"
                  placeholder="ユーザー名"
                  {...form.getInputProps("username")}
                />
              </Box>

              <Box>
                <TextInput
                  id="email"
                  type="email"
                  label="メールアドレス"
                  placeholder="メールアドレス"
                  {...form.getInputProps("email")}
                />
              </Box>

              <Box>
                <TextInput
                  id="password"
                  type="password"
                  label="パスワード"
                  placeholder="パスワード"
                  {...form.getInputProps("password")}
                />
              </Box>

              <Box>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  label="パスワード(確認)"
                  placeholder="パスワード(確認)"
                  {...form.getInputProps("confirmPassword")}
                />
              </Box>

              {error && (
                <Alert color="red" title="エラー">
                  {error}
                </Alert>
              )}

              <Button type="submit" loading={isLoading} fullWidth>
                登録する
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Container>
  );
};