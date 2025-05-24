import { ReactNode } from 'react';

export interface Level {
  label: string;
  value: string;
  icon?: ReactNode;
}

export const levels: Level[] = [
  { label: 'Intern', value: 'intern' },
  { label: 'Junior', value: 'junior' },
  { label: 'Mid', value: 'mid' },
  { label: 'Senior', value: 'senior' },
  { label: 'Lead', value: 'lead' },
  { label: 'Manager', value: 'manager' },
];
