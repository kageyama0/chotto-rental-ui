"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base/Button/Button';
import { Card } from '@/components/base/Card/Card';
import { Container } from '@/components/base/Container/Container';
import { Grid } from '@/components/base/Grid/Grid';
import { GridCol } from '@/components/base/Grid/GridCol';
import { Group } from '@/components/base/Group/Group';
import { Stack } from '@/components/base/Stack/Stack';
import { TextInput } from '@/components/base/TextInput/TextInput';
import { Textarea } from '@/components/base/Textarea/Textarea';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { Select } from '@/components/base/Select/Select';
import { NumberInput } from '@/components/base/NumberInput/NumberInput';
import { DateInput } from '@/components/base/DateInput/DateInput';
import { TimeInput } from '@/components/base/TimeInput/TimeInput';

interface CreateCaseForm {
  title: string;
  description: string;
  category: string;
  reward: number;
  requiredPeople: number;
  date: Date | null;
  startTime: string;
  duration: number;
  prefecture: string;
  city: string;
  address: string;
}

const initialForm: CreateCaseForm = {
  title: '',
  description: '',
  category: '',
  reward: 1000,
  requiredPeople: 1,
  date: null,
  startTime: '',
  duration: 30,
  prefecture: '',
  city: '',
  address: '',
};

export const CreateCasePage = () => {
  const router = useRouter();
  const [form, setForm] = useState<CreateCaseForm>(initialForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: バリデーションと API 呼び出し
    console.log('Form submitted:', form);
    // 成功時にリダイレクト
    router.push('/case/[id]');
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Title order={1}>依頼を作成</Title>

        <form onSubmit={handleSubmit}>
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
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <Textarea
                  label="依頼内容"
                  placeholder="依頼内容の詳細を記入してください"
                  minRows={4}
                  required
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
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
                  value={form.category}
                  onChange={(value) =>
                    setForm({ ...form, category: value || '' })
                  }
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
                  value={form.reward}
                  onChange={(value) => {
                    const numValue =
                      typeof value === 'string'
                        ? Number.parseInt(value)
                        : value;
                    setForm({ ...form, requiredPeople: numValue || 1 });
                  }}
                  rightSection={<Text size="sm">円</Text>}
                />

                <NumberInput
                  label="募集人数"
                  required
                  min={1}
                  max={10}
                  value={form.requiredPeople}
                  onChange={(value) => {
                    const numValue =
                      typeof value === 'string'
                        ? Number.parseInt(value)
                        : value;
                    setForm({ ...form, reward: numValue || 1 });
                  }}
                  rightSection={<Text size="sm">人</Text>}
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
                      value={form.date}
                      onChange={(date) => setForm({ ...form, date })}
                      minDate={new Date()}
                    />
                  </GridCol>
                  <GridCol span={6}>
                    <TimeInput
                      label="開始時間"
                      placeholder="開始時間を選択"
                      required
                      value={form.startTime}
                      onChange={(e) =>
                        setForm({ ...form, startTime: e.target.value })
                      }
                    />
                  </GridCol>
                </Grid>

                <NumberInput
                  label="所要時間"
                  required
                  min={15}
                  step={15}
                  value={form.duration}
                  onChange={(value) => {
                    const numValue =
                      typeof value === 'string'
                        ? Number.parseInt(value)
                        : value;
                    setForm({ ...form, duration: numValue });
                  }}
                  rightSection={<Text size="sm">分</Text>}
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
                      data={[
                        { value: 'tokyo', label: '東京都' },
                        { value: 'kanagawa', label: '神奈川県' },
                        // ... 他の都道府県
                      ]}
                      value={form.prefecture}
                      onChange={(value) =>
                        setForm({ ...form, prefecture: value || '' })
                      }
                    />
                  </GridCol>
                  <GridCol span={6}>
                    <TextInput
                      label="市区町村"
                      placeholder="例：渋谷区"
                      required
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                    />
                  </GridCol>
                </Grid>

                <TextInput
                  label="番地・建物名"
                  placeholder="例：神南1-2-3 渋谷ビル101"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </Stack>
            </Card>

            {/* 送信ボタン */}
            <Group justify="center">
              <Button variant="outline" onClick={() => router.back()}>
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
