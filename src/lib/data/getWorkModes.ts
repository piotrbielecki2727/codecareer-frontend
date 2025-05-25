import { IOption } from '@/types/interfaces';
import { TFunction } from 'i18next';



export const getWorkModes = (t: TFunction): IOption[] => [
  { label: t('workMode.remote'), value: 'remote' },
  { label: t('workMode.hybrid'), value: 'hybrid' },
  { label: t('workMode.office'), value: 'office' },
];
