'use client';

import { Control, useFormContext } from 'react-hook-form';
import {
  CompanyLogoUploader,
  InputControl,
  MarkdownEditor,
} from '@/components';
import { InputType } from '@/types';
import { JobFormValues } from '../../schema';
import { PostJobFormFields } from '../../types';
import { useTranslation } from 'react-i18next';

type Props = {
  control: Control<JobFormValues>;
};

export const GeneralInfo = ({ control }: Props) => {
  const { t } = useTranslation();
  const { setValue } = useFormContext<JobFormValues>();

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.generalInfo')}
      </h2>

      <InputControl
        name={PostJobFormFields.jobTitle}
        control={control}
        label={t('postJob.jobTitle')}
        placeholder={t('postJob.jobTitlePlaceholder')}
        type={InputType.Text}
      />

      <InputControl
        name={PostJobFormFields.companyName}
        control={control}
        label={t('companyName')}
        placeholder={t('postJob.companyNamePlaceholder')}
        type={InputType.Text}
      />
      <CompanyLogoUploader
        onUpload={(url) => setValue(PostJobFormFields.companyLogoUrl, url)}
      />
      <MarkdownEditor
        name={PostJobFormFields.companyDescription}
        control={control}
        label={t('postJob.companyDescription')}
        placeholder={t('postJob.companyDescriptionPlaceholder')}
        rows={10}
      />
      <InputControl
        name={PostJobFormFields.vacancies}
        control={control}
        label={t('postJob.vacancies')}
        placeholder={t('postJob.vacanciesPlaceholder')}
        type={InputType.Number}
      />
    </section>
  );
};
