import { IOption } from '@/types/interfaces';
import { TFunction } from 'i18next';

export const getSortingTypes = (t: TFunction): IOption[] => [
  { label: t('mainPage.default'), value: 'default' },
  { label: t('mainPage.latest'), value: 'latest' },
  { label: t('mainPage.highestSalary'), value: 'highestSalary' },
  { label: t('mainPage.lowestSalary'), value: 'lowestSalary' },
];
