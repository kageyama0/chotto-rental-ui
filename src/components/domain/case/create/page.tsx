'use client';

import { Button } from '@/components/base/Button/Button';
import { Card } from '@/components/base/Card/Card';
import { Container } from '@/components/base/Container/Container';
import { DateInput } from '@/components/base/DateInput/DateInput';
import { Grid } from '@/components/base/Grid/Grid';
import { GridCol } from '@/components/base/Grid/GridCol';
import { Group } from '@/components/base/Group/Group';
import { NumberInput } from '@/components/base/NumberInput/NumberInput';
import { Select } from '@/components/base/Select/Select';
import { Stack } from '@/components/base/Stack/Stack';
import { TextInput } from '@/components/base/TextInput/TextInput';
import { Textarea } from '@/components/base/Textarea/Textarea';
import { TimeInput } from '@/components/base/TimeInput/TimeInput';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { usePage } from '@/components/domain/case/create/usePage';
import { PREFECTURES } from '@/const/prefectures';

export const CreateCasePage = () => {
  const { form, back, handleSubmit } = usePage();

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Title order={1}>依頼を作成</Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="xl">
            {/* 基本情報 */}
            <Card>
              <Stack gap="md">
                <Title order={2} size="h4">
                  基本情報
                </Title>

                <TextInput
                  label="タイトル"
                  placeholder="例：引っ越しの荷物運びを手伝ってください"
                  required
                  {...form.getInputProps('title')}
                />

                <Textarea
                  label="依頼内容"
                  placeholder="依頼内容の詳細を記入してください"
                  minRows={4}
                  required
                  {...form.getInputProps('description')}
                />

                <Select
                  label="カテゴリー"
                  placeholder="カテゴリーを選択"
                  required
                  data={[
                    { value: 'physical', label: '力仕事' },
                    { value: 'conversation', label: '会話' },
                    { value: 'shopping', label: '買い物' },
                    { value: 'cleaning', label: '掃除' },
                    { value: 'other', label: 'その他' },
                  ]}
                  {...form.getInputProps('category')}
                />
              </Stack>
            </Card>

            {/* 報酬と人数 */}
            <Card>
              <Stack gap="md">
                <Title order={2} size="h4">
                  報酬と募集人数
                </Title>

                <NumberInput
                  label="報酬（税込・交通費込）"
                  required
                  min={500}
                  step={100}
                  rightSection={<Text size="sm">円</Text>}
                  {...form.getInputProps('reward')}
                />

                <NumberInput
                  label="募集人数"
                  required
                  min={1}
                  max={10}
                  rightSection={<Text size="sm">人</Text>}
                  {...form.getInputProps('requiredPeople')}
                />
              </Stack>
            </Card>

            {/* 日時 */}
            <Card>
              <Stack gap="md">
                <Title order={2} size="h4">
                  日時
                </Title>

                <Grid gutter="md">
                  <GridCol span={6}>
                    <DateInput
                      label="日付"
                      placeholder="日付を選択"
                      required
                      {...form.getInputProps('date')}
                    />
                  </GridCol>
                  <GridCol span={6}>
                    <TimeInput
                      label="開始時間"
                      placeholder="開始時間を選択"
                      required
                      {...form.getInputProps('startTime')}
                    />
                  </GridCol>
                </Grid>

                <NumberInput
                  label="所要時間"
                  required
                  min={15}
                  step={15}
                  rightSection={<Text size="sm">分</Text>}
                  {...form.getInputProps('duration')}
                />
              </Stack>
            </Card>

            {/* 場所 */}
            <Card>
              <Stack gap="md">
                <Title order={2} size="h4">
                  場所
                </Title>

                <Grid gutter="md">
                  <GridCol span={6}>
                    <Select
                      label="都道府県"
                      placeholder="都道府県を選択"
                      required
                      data={PREFECTURES}
                      {...form.getInputProps('prefecture')}
                    />
                  </GridCol>
                  <GridCol span={6}>
                    <TextInput
                      label="市区町村"
                      placeholder="例：渋谷区"
                      required
                      {...form.getInputProps('city')}
                    />
                  </GridCol>
                </Grid>

                <TextInput
                  label="番地・建物名"
                  placeholder="例：神南1-2-3 渋谷ビル101"
                  required
                  {...form.getInputProps('address')}
                />
              </Stack>
            </Card>

            {/* 送信ボタン */}
            <Group justify="center">
              <Button variant="outline" onClick={back}>
                キャンセル
              </Button>
              <Button type="submit">依頼を作成する</Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};
