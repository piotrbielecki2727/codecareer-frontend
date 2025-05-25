import { Control } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { PostJobFormFields } from '../../types';
import { useTranslation } from 'react-i18next';
import { MarkdownEditor } from '@/components/ui';

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
      <MarkdownEditor
        name={PostJobFormFields.positionDescription}
        control={control}
        label={t('postJob.positionDescription')}
        placeholder={t('postJob.positionDescriptionPlaceholder')}
        rows={10}
      />
    </section>
  );
};
