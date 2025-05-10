import { TFunction } from 'i18next';

export interface ForeignLanguage {
  label: string;
  value: string;
}

export const getForeignLanguagesOptions = (t: TFunction): ForeignLanguage[] => [
  { label: t('englishLanguage'), value: 'english' },
  { label: t('germanLanguage'), value: 'german' },
  { label: t('frenchLanguage'), value: 'french' },
  { label: t('spanishLanguage'), value: 'spanish' },
  { label: t('italianLanguage'), value: 'italian' },
];
