import { IOption } from '@/types/interfaces';
import { TFunction } from 'i18next';



export const getForeignLanguagesOptions = (t: TFunction): IOption[] => [
  { label: t('englishLanguage'), value: 'english' },
  { label: t('germanLanguage'), value: 'german' },
  { label: t('frenchLanguage'), value: 'french' },
  { label: t('spanishLanguage'), value: 'spanish' },
  { label: t('italianLanguage'), value: 'italian' },
  { label: t('ukrainianLanguage'), value: 'ukrainian' },
];
