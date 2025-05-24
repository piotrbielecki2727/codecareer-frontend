import { TFunction } from 'i18next';

export interface LanguageProfficiencyLevels {
  label: string;
  value: string;
}

export const getLanguageProfficiencyLevels = (
  t: TFunction
): LanguageProfficiencyLevels[] => [
  { label: t('postJob.LanguageProfficiencyLevels.a1'), value: 'a1' },
  { label: t('postJob.LanguageProfficiencyLevels.a2'), value: 'a2' },
  { label: t('postJob.LanguageProfficiencyLevels.b1'), value: 'b1' },
  { label: t('postJob.LanguageProfficiencyLevels.b2'), value: 'b2' },
  { label: t('postJob.LanguageProfficiencyLevels.c1'), value: 'c1' },
  { label: t('postJob.LanguageProfficiencyLevels.c2'), value: 'c2' },
];
