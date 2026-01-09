export interface User {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  sales: number;
  revenue: string;
  percentage: string;
  leads: number;
  conversionRate: number;
  deals: number;
  win: string;
  loss: number;
}

export interface MetricData {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
}

export interface PlatformData {
  id: string;
  name: string;
  icon: string;
  revenue: string;
  percentage: string;
}
