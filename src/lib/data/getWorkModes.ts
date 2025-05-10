import { TFunction } from 'i18next';

export interface WorkMode {
  label: string;
  value: string;
}

export const getWorkModes = (t: TFunction): WorkMode[] => [
  { label: t('workMode.remote'), value: 'remote' },
  { label: t('workMode.hybrid'), value: 'hybrid' },
  { label: t('workMode.office'), value: 'office' },
];
