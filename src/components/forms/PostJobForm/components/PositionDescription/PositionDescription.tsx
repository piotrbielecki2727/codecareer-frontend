import { Control } from 'react-hook-form';
import { TextareaControl } from '@/components';
import { JobFormValues } from '../../schema';
import { PostJobFormFields } from '../../types';
import { useTranslation } from 'react-i18next';

type Props = {
  control: Control<JobFormValues>;
};

export const PositionDescription = ({ control }: Props) => {
  const { t } = useTranslation();

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.positionDescription')}
      </h2>

      <TextareaControl
        name={PostJobFormFields.positionDescription}
        control={control}
        label={t('postJob.positionDescription')}
        placeholder={t('postJob.positionDescriptionPlaceholder')}
        rows={10}
      />
    </section>
  );
};
