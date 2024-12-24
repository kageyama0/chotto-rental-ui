'use client';

import { Badge } from '@/components/base/Badge/Badge';
import { Card } from '@/components/base/Card/Card';
import { Container } from '@/components/base/Container/Container';
import { Grid } from '@/components/base/Grid/Grid';
import { GridCol } from '@/components/base/Grid/GridCol';
import { Group } from '@/components/base/Group/Group';
import { Select } from '@/components/base/Select/Select';
import { Stack } from '@/components/base/Stack/Stack';
import { TextInput } from '@/components/base/TextInput/TextInput';
import { Text } from '@/components/base/Typography/Text';
import { Title } from '@/components/base/Typography/Title';
import { useState } from 'react';

// サンプルデータ
const sampleCases: Case[] = [
  {
    id: '1',
    title: 'ECサイトリニューアル',
    client: '株式会社ABC',
    status: 'active',
    startDate: '2024-01-15',
    budget: 5000000,
    description: '既存ECサイトのUIUX改善とパフォーマンス最適化',
  },
  {
    id: '2',
    title: '社内システム開発',
    client: '株式会社XYZ',
    status: 'pending',
    startDate: '2024-02-01',
    budget: 3000000,
    description: '勤怠管理・経費精算システムの刷新',
  },
  // ... 他の依頼データ
];

export const CaseSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // 検索とフィルタリングのロジック
  const filteredCases = sampleCases.filter((case_) => {
    const matchesSearch =
      case_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      case_.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || case_.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ステータスに応じたバッジの色を返す関数
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'blue';
      case 'completed':
        return 'green';
      case 'pending':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1}>依頼一覧</Title>

        {/* 検索・フィルターエリア */}
        <Grid>
          <GridCol span={8}>
            <TextInput
              placeholder="依頼名または顧客名で検索"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </GridCol>
          <GridCol span={4}>
            <Select
              placeholder="ステータスで絞り込み"
              value={statusFilter}
              onChange={setStatusFilter}
              data={[
                { value: 'active', label: '進行中' },
                { value: 'completed', label: '完了' },
                { value: 'pending', label: '待機中' },
              ]}
              clearable
            />
          </GridCol>
        </Grid>

        <Stack gap="md">
          {filteredCases.map((case_) => (
            <Card
              key={case_.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Group justify="apart" mb="xs">
                <Text size="lg">{case_.title}</Text>
                <Badge color={getStatusColor(case_.status)}>
                  {case_.status === 'active'
                    ? '進行中'
                    : case_.status === 'completed'
                      ? '完了'
                      : '待機中'}
                </Badge>
              </Group>

              <Text color="dimmed" size="sm" mb="md">
                {case_.client}
              </Text>

              <Text size="sm" mb="md">
                {case_.description}
              </Text>

              <Group justify="apart">
                <Text size="sm" color="dimmed">
                  開始日: {case_.startDate}
                </Text>
                <Text size="sm">予算: ¥{case_.budget.toLocaleString()}</Text>
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
