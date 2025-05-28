import {
  Shield,
  Server,
  Monitor,
  Headphones,
  Star,
  Settings,
  Layout,
  Smartphone,
  Cloud,
  Code2,
  Layers,
  Database,
  ChartLine,
  Gamepad2,
  Palette,
  Brain,
} from 'lucide-react';
import { IOption } from '@/types/interfaces';

export const specializations: IOption[] = [
  { label: 'Frontend', value: 'frontend', icon: <Layout /> },
  { label: 'Backend', value: 'backend', icon: <Server /> },
  { label: 'Fullstack', value: 'fullstack', icon: <Code2 /> },
  { label: 'Mobile', value: 'mobile', icon: <Smartphone /> },
  { label: 'DevOps', value: 'devops', icon: <Cloud /> },

  // Popularne
  { label: 'QA', value: 'qa', icon: <Shield /> },
  { label: 'UI/UX', value: 'ui-ux-design', icon: <Palette /> },
  { label: 'Data', value: 'data-engineering', icon: <Layers /> },
  {
    label: 'PM',
    value: 'pm',
    icon: <Brain />,
  },

  { label: 'AI & ML', value: 'ai-ml', icon: <Star /> },
  { label: 'Analytics', value: 'analytics', icon: <ChartLine /> },

  { label: 'SAP & ERP', value: 'sap-erp', icon: <Settings /> },
  { label: 'IT admin', value: 'it-admin', icon: <Monitor /> },

  { label: 'Security', value: 'security', icon: <Shield /> },
  { label: 'Helpdesk', value: 'helpdesk', icon: <Headphones /> },

  { label: 'Big data', value: 'big-data', icon: <Database /> },
  { label: 'Game dev', value: 'game-dev', icon: <Gamepad2 /> },
];
