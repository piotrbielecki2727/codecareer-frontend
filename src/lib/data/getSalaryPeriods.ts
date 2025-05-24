import { TFunction } from 'i18next';

export interface SalaryPeriod {
  label: string;
  value: string;
}

export const getSalaryPeriods = (t: TFunction): SalaryPeriod[] => [
  { label: t('postJob.perHour'), value: 'perHour' },
  { label: t('postJob.perDay'), value: 'perDay' },
  { label: t('postJob.perMonth'), value: 'perMonth' },
  { label: t('postJob.perOrder'), value: 'perOrder' },
];
