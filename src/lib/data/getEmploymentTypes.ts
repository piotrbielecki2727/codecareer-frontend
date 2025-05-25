import { IOption } from '@/types/interfaces';
import { TFunction } from 'i18next';

export const getEmploymentTypes = (t: TFunction): IOption[] => [
  { label: t('employment.fullTime'), value: 'full-time' },
  { label: t('employment.partTime'), value: 'part-time' },
  { label: t('employment.contract'), value: 'contract' },
  { label: t('employment.internship'), value: 'internship' },
  { label: t('employment.b2b'), value: 'b2b' },
];
