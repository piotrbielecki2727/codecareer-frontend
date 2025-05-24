'use client';

import { ComboboxControl } from '@/components';
import { Control } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { useTranslation } from 'react-i18next';
import { PostJobFormFields } from '../../types';
import { technologies } from '@/lib/data/technologies';

type Props = {
  control: Control<JobFormValues>;
};

export const Technologies = ({ control }: Props) => {
  const { t } = useTranslation();

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.technologies')}
      </h2>
      <ComboboxControl
        name={PostJobFormFields.technologies}
        control={control}
        label={t('postJob.listOfTechnologies')}
        options={technologies({ width: 16, height: 16 })}
        multiSelect
        placeholder={t('postJob.selectTechnologies')}
      />
    </section>
  );
};
