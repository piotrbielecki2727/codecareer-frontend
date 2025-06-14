import { getEmploymentTypes, getWorkModes } from '@/lib';
import { levels } from '@/lib/data/levels';
import { technologies } from '@/lib/data/technologies';
import { TFunction } from 'next-i18next';

export const getTranslatedLabel = (value: string, t: TFunction): string => {
  const allOptions = [
    ...technologies(),
    ...levels,
    ...getWorkModes(t),
    ...getEmploymentTypes(t),
  ];

  return allOptions.find((opt) => opt.value === value)?.label ?? value;
};
