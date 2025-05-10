import { ReactNode } from 'react';
import {
  Code,
  Braces,
  Cpu,
  Settings,
  Smartphone,
  Activity,
  Zap,
  Coffee,
} from 'lucide-react';

export interface ProgrammingLanguage {
  label: string;
  value: string;
  icon: ReactNode;
}

export const programmingLanguages: ProgrammingLanguage[] = [
  { label: 'JavaScript', value: 'javascript', icon: <Braces /> },
  { label: 'Python', value: 'python', icon: <Activity /> },
  { label: 'Java', value: 'java', icon: <Coffee /> },
  { label: 'C#', value: 'csharp', icon: <Settings /> },
  { label: 'TypeScript', value: 'typescript', icon: <Braces /> },
  { label: 'PHP', value: 'php', icon: <Code /> },
  { label: 'C++', value: 'cpp', icon: <Cpu /> },
  { label: 'Go', value: 'go', icon: <Zap /> },
  { label: 'Kotlin', value: 'kotlin', icon: <Smartphone /> },
  { label: 'Swift', value: 'swift', icon: <Smartphone /> },
];
