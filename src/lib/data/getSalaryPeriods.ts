import { IOption } from '@/types/interfaces';
import { TFunction } from 'i18next';


export const getSalaryPeriods = (t: TFunction): IOption[] => [
  { label: t('postJob.perHour'), value: 'perHour' },
  { label: t('postJob.perDay'), value: 'perDay' },
  { label: t('postJob.perMonth'), value: 'perMonth' },
  { label: t('postJob.perOrder'), value: 'perOrder' },
];
