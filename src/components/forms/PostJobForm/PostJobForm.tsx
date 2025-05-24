'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { jobFormDefaultValues, jobFormSchema, JobFormValues } from './schema';
import {
  GeneralInfo,
  JobPreview,
  Languages,
  LevelAndType,
  Localization,
  PositionDescription,
  Salary,
  Technologies,
} from './components';
import { Button } from '@/components/ui';
import { useTranslation } from 'react-i18next';

export const PostJobForm = () => {
  const { t } = useTranslation();

  const methods = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: jobFormDefaultValues,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: JobFormValues) => {
    console.log('Full job form:', data);
  };

  return (
    <FormProvider<JobFormValues> {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-10 max-w-3xl mx-auto px-4'
      >
        <GeneralInfo control={control} />
        <Localization control={control} />
        <LevelAndType control={control} />
        <Technologies control={control} />
        <Languages control={control} />
        <Salary control={control} />
        <PositionDescription control={control} />
        <JobPreview />
        <Button
          type='submit'
          className='w-full bg-gradient-to-r from-purple-600 to-blue-400 text-white hover:opacity-80 cursor-pointer'
          disabled={!isValid}
        >
          {t('postJob.publishOffer')}
        </Button>
      </form>
    </FormProvider>
  );
};
