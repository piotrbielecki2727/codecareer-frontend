'use client';

import {
  DropdownControl,
  InputWithCounterControl,
  SwitchControl,
} from '@/components';
import { Control, useWatch } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { useTranslation } from 'react-i18next';
import { PostJobFormFields } from '../../types';
import { currencies, getSalaryPeriods } from '@/lib';

type Props = {
  control: Control<JobFormValues>;
};

export const Salary = ({ control }: Props) => {
  const { t } = useTranslation();

  const isSalaryRange = useWatch({
    name: PostJobFormFields.isSalaryRange,
    control,
  });

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.salary')}
      </h2>
      <SwitchControl
        name={PostJobFormFields.isSalaryShown}
        control={control}
        label={t('postJob.doYouWantToShowSalaryInYourOffer')}
        wrapperClassName='flex items-center justify-between'
      />
      <DropdownControl
        control={control}
        label={t('postJob.currency')}
        placeholder={t('postJob.selectCurrency')}
        name={PostJobFormFields.currency}
        options={currencies}
      />
      <SwitchControl
        name={PostJobFormFields.isSalaryRange}
        control={control}
        label={t('postJob.doYouWantToAddSalaryRanges')}
        wrapperClassName='flex items-center justify-between'
      />
      {isSalaryRange ? (
        <div className='flex items-center align-middle justify-between gap-3'>
          <InputWithCounterControl
            name={PostJobFormFields.minSalary}
            label={t('postJob.minSalary')}
            min={0}
            max={1000000}
            defaultValue={5000}
            control={control}
          />
          <span className='mt-7.5'>-</span>
          <InputWithCounterControl
            label={t('postJob.maxSalary')}
            name={PostJobFormFields.maxSalary}
            min={0}
            defaultValue={10000}
            max={1000000}
            control={control}
          />
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <InputWithCounterControl
            label={t('postJob.salary')}
            min={0}
            defaultValue={5000}
            max={1000000}
            control={control}
            name={PostJobFormFields.salary}
          />
          <DropdownControl
            control={control}
            label={t('postJob.salaryPeriod')}
            placeholder={t('postJob.selectSalaryPeriod')}
            name={PostJobFormFields.salaryPeriod}
            options={getSalaryPeriods(t)}
          />
        </div>
      )}
      {isSalaryRange && (
        <DropdownControl
          control={control}
          label={t('postJob.salaryPeriod')}
          placeholder={t('postJob.selectSalaryPeriod')}
          name={PostJobFormFields.salaryPeriod}
          options={getSalaryPeriods(t)}
        />
      )}
    </section>
  );
};
