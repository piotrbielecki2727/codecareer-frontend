import { ReactNode } from 'react';
import {
  Shield,
  Server,
  Monitor,
  BarChart,
  Headphones,
  Brain,
  Star,
  Settings,
  Layout,
  Smartphone,
  Cloud,
  Code2,
  Layers,
} from 'lucide-react';

export interface Specialization {
  label: string;
  value: string;
  icon: ReactNode;
}

export const specializations: Specialization[] = [
  { label: 'Frontend', value: 'frontend', icon: <Layout /> },
  { label: 'Backend', value: 'backend', icon: <Server /> },
  { label: 'Fullstack', value: 'fullstack', icon: <Code2 /> },
  { label: 'Mobile', value: 'mobile', icon: <Smartphone /> },
  { label: 'DevOps', value: 'devops', icon: <Cloud /> },
  { label: 'IT admin', value: 'it-admin', icon: <Monitor /> },
  { label: 'SAP & ERP', value: 'sap-erp', icon: <Settings /> },
  {
    label: 'Business analytics',
    value: 'business-analytics',
    icon: <BarChart />,
  },
  { label: 'Helpdesk', value: 'helpdesk', icon: <Headphones /> },
  { label: 'Big data', value: 'big-data', icon: <Brain /> },
  { label: 'System analytics', value: 'system-analytics', icon: <Layers /> },
  { label: 'Project management', value: 'project-management', icon: <Star /> },
  { label: 'Security', value: 'security', icon: <Shield /> },
];
