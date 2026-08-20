export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'incident' | 'operations' | 'governance';
  description: string;
  iconName: string;
  deliverables?: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  items: string[];
  icon: string;
}

export interface OperatingStep {
  step: number;
  name: string;
  summary: string;
  actions: string[];
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface SLAItem {
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  level: string;
  target: string;
  targetMinutes: number;
  description: string;
  impact: string;
  example: string;
}

export interface GovernanceItem {
  cadence: 'Daily' | 'Weekly' | 'Monthly';
  badgeColor: string;
  items: string[];
  purpose: string;
}

export interface EngagementStep {
  step: number;
  title: string;
  description: string;
  details: string;
  deliverable: string;
}

export interface ValueItem {
  title: string;
  description: string;
  impactMetric: string;
  icon: string;
}
