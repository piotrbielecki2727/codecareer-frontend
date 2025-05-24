'use client';

import { ComboboxControl, DropdownControl } from '@/components';
import { Control, useWatch } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { useTranslation } from 'react-i18next';
import { PostJobFormFields } from '../../types';
import {
  getForeignLanguagesOptions,
  getLanguageProfficiencyLevels,
} from '@/lib';

type Props = {
  control: Control<JobFormValues>;
};

export const Languages = ({ control }: Props) => {
  const { t } = useTranslation();

  const selectedLanguages = useWatch({
    name: PostJobFormFields.languages,
    control,
  }) as string[];

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.languages')}
      </h2>
      <ComboboxControl
        name={PostJobFormFields.languages}
        control={control}
        label={`${t('postJob.languages')}:`}
        options={getForeignLanguagesOptions(t)}
        multiSelect
        placeholder={t('postJob.selectLanguages')}
      />
      {selectedLanguages?.map((lang) => {
        const languageLabel =
          getForeignLanguagesOptions(t).find((l) => l.value === lang)?.label ||
          lang;
        return (
          <DropdownControl
            key={lang}
            name={`languageLevels.${lang}`}
            control={control}
            label={`${t('postJob.languageLevelFor')} ${languageLabel}`}
            options={getLanguageProfficiencyLevels(t)}
            placeholder={t('postJob.selectProficiencyLevel')}
          />
        );
      })}
    </section>
  );
};
