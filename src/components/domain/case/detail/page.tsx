"use client";

import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/base/Card/Card';
import { Group } from '@/components/base/Group/Group';
import { Badge } from '@/components/base/Badge/Badge';
import { Grid } from '@/components/base/Grid/Grid';
import { Stack } from '@/components/base/Stack/Stack';
import { Text } from '@/components/base/Typography/Text';
import { Button } from '@/components/base/Button/Button';
import { Title } from '@/components/base/Typography/Title';
import { Avatar } from '@/components/base/Avatar/Avatar';
import type { BadgeProps } from '@/components/base/Badge/Badge.types';
import { GridCol } from '@/components/base/Grid/GridCol';

interface CaseDetail {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  reward: number;
  location: {
    prefecture: string;
    city: string;
    address?: string;
  };
  datetime: {
    date: string;
    startTime: string;
    duration: number; // 分単位
  };
  description: string;
  requester: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    completedCases: number;
  };
  category: string;
  requiredPeople: number;
  appliedPeople: number;
  urgency: 'high' | 'medium' | 'low';
}

// サンプルデータ（実際はAPIから取得）
const sampleCaseDetail: CaseDetail = {
  id: '1',
  title: '引っ越しの荷物運びを手伝ってください',
  status: 'open',
  reward: 2000,
  location: {
    prefecture: '東京都',
    city: '渋谷区',
    address: '代々木1-1-1',
  },
  datetime: {
    date: '2024-01-20',
    startTime: '14:00',
    duration: 60,
  },
  description:
    '一人暮らしの引っ越しで、家具の運び出しを手伝っていただける方を探しています。\n大きな家具はありませんが、段ボール10箱ほどあります。\n1階から1階への引っ越しで、距離は徒歩5分程度です。',
  requester: {
    id: '101',
    name: '田中さくら',
    rating: 4.5,
    completedCases: 3,
  },
  category: '力仕事',
  requiredPeople: 2,
  appliedPeople: 1,
  urgency: 'medium',
};

export const CaseDetailPage = () => {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('case_id');
  console.log(caseId);

  // TODO: 実際のアプリケーションではここでAPIを呼び出してデータを取得
  const caseData = sampleCaseDetail;
  // TODO: ローディング中の表示を追加
  // if (isLoading) return <div>Loading...</div>;

  // TODO: エラー時の表示を追加
  // if (error) return <div>Error occurred</div>;

  // TODO: データが取得できなかった場合の表示を追加
  // if (!caseData) return null;

  const getStatusVariant = (status: string): BadgeProps['variant'] => {
    switch (status) {
      case 'open':
        return 'info';
      case 'in_progress':
        return 'warning';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return '募集中';
      case 'in_progress':
        return '進行中';
      case 'completed':
        return '完了';
      case 'cancelled':
        return '中止';
      default:
        return status;
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return '急募';
      case 'medium':
        return '募集中';
      case 'low':
        return '余裕あり';
      default:
        return urgency;
    }
  };

  return (
    <Stack gap="xl">
      {/* ヘッダー - 報酬と応募ボタン */}
      <Card>
        <Grid>
          <GridCol span={{ base: 12, md: 8 }}>
            <Stack gap="xs">
              <Group gap="xs">
                <Badge variant={getStatusVariant(caseData.status)}>
                  {getStatusLabel(caseData.status)}
                </Badge>
                {caseData.urgency === 'high' && (
                  <Badge variant="error">急募</Badge>
                )}
                <Badge>{caseData.category}</Badge>
              </Group>
              <Title order={2}>{caseData.title}</Title>
              <Text c="dimmed">
                {caseData.location.prefecture} {caseData.location.city}
              </Text>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 4 }}>
            <Stack align="flex-end" gap="xs">
              <Title order={2} c="blue">
                ¥{caseData.reward.toLocaleString()}
              </Title>
              <Text size="sm" c="dimmed">
                ※報酬は税込・交通費込
              </Text>
              {caseData.status === 'open' && (
                <Button size="lg" fullWidth>
                  応募する
                </Button>
              )}
            </Stack>
          </GridCol>
        </Grid>
      </Card>

      <Grid>
        {/* メイン情報 */}
        <GridCol span={{ base: 12, md: 8 }}>
          <Stack gap="lg">
            {/* 案件の詳細 */}
            <Card>
              <Stack gap="md">
                <Title order={3} size="h4">
                  依頼内容
                </Title>
                <Text style={{ whiteSpace: 'pre-line' }}>
                  {caseData.description}
                </Text>
              </Stack>
            </Card>

            依頼者情報
            <Card>
              <Title order={3} size="h4" mb="md">
                依頼者
              </Title>
              <Group>
                {/* <Avatar
                  src={caseData.requester.avatar}
                  alt={caseData.requester.name}
                  radius="xl"
                  size="lg"
                /> */}
                <div>
                  {/* <Text>{caseData.requester.name}</Text> */}
                  {/* <Group gap="xs">
                    <Text size="sm">評価: {caseData.requester.rating}</Text>
                    <Text size="sm" c="dimmed">
                      •
                    </Text>
                    <Text size="sm">
                      取引完了: {caseData.requester.completedCases}件
                    </Text>
                  </Group> */}
                </div>
              </Group>
            </Card>
          </Stack>
        </GridCol>

        {/* サイドバー情報 */}
        <GridCol span={{ base: 12, md: 4 }}>
          <Stack gap="lg">
            {/* 募集要項 */}
            <Card>
              <Stack gap="md">
                <Title order={3} size="h4">
                  募集要項
                </Title>
                <Stack gap="xs">
                  <Group justify="apart">
                    <Text c="dimmed">募集人数</Text>
                    <Text>
                      {caseData.appliedPeople} / {caseData.requiredPeople}人
                    </Text>
                  </Group>
                  <Group justify="apart">
                    <Text c="dimmed">日時</Text>
                    <Text>{caseData.datetime.date}</Text>
                  </Group>
                  <Group justify="apart">
                    <Text c="dimmed">開始時間</Text>
                    <Text>{caseData.datetime.startTime}</Text>
                  </Group>
                  <Group justify="apart">
                    <Text c="dimmed">所要時間</Text>
                    <Text>約{caseData.datetime.duration}分</Text>
                  </Group>
                  <Group justify="apart">
                    <Text c="dimmed">場所</Text>
                    <Text>
                      {caseData.location.prefecture}
                      {caseData.location.city}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Card>

            {/* 地図（実装時に追加） */}
            <Card>
              <Title order={3} size="h4" mb="md">
                場所
              </Title>
              <div
                style={{
                  background: '#f0f0f0',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                地図が表示されます
              </div>
            </Card>
          </Stack>
        </GridCol>
      </Grid>
    </Stack>
  );
};
