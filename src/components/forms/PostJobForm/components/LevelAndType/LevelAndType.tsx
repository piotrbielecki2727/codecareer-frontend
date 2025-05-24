'use client';

import { DropdownControl } from '@/components';
import { Control } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { levels } from '@/lib/data/levels';
import { getEmploymentTypes, getWorkModes, specializations } from '@/lib';
import { useTranslation } from 'react-i18next';
import { PostJobFormFields } from '../../types';

type Props = {
  control: Control<JobFormValues>;
};

export const LevelAndType = ({ control }: Props) => {
  const { t } = useTranslation();

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.levelAndSpecialization')}
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <DropdownControl
          name={PostJobFormFields.level}
          control={control}
          label={t('postJob.positionLevel')}
          options={levels}
          placeholder={t('postJob.selectLevel')}
        />
        <DropdownControl
          name={PostJobFormFields.specialization}
          control={control}
          label={t('postJob.specialization')}
          options={specializations}
          placeholder={t('postJob.selectSpecialization')}
        />
        <DropdownControl
          name={PostJobFormFields.contractType}
          control={control}
          label={t('postJob.contractType')}
          options={getEmploymentTypes(t)}
          placeholder={t('postJob.selectContractType')}
        />
        <DropdownControl
          name={PostJobFormFields.workMode}
          control={control}
          label={t('postJob.workMode')}
          options={getWorkModes(t)}
          placeholder={t('postJob.selectWorkMode')}
        />
      </div>
    </section>
  );
};
