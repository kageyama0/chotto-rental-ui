// 依頼の型定義
interface Case {
  id: string;
  title: string;
  client: string;
  status: 'active' | 'completed' | 'pending';
  startDate: string;
  budget: number;
  description: string;
}
