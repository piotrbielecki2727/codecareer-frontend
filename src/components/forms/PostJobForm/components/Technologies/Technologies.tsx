'use client';

import { ComboboxControl, DotsLevelControl } from '@/components';
import { Control, useWatch } from 'react-hook-form';
import { JobFormValues } from '../../schema';
import { useTranslation } from 'react-i18next';
import { PostJobFormFields } from '../../types';
import { technologies } from '@/lib/data/technologies';

type Props = {
  control: Control<JobFormValues>;
};

export const Technologies = ({ control }: Props) => {
  const { t } = useTranslation();

  const selectedTechnologies = useWatch({
    control,
    name: PostJobFormFields.technologies,
  }) as string[];

  const techOptions = technologies({ width: 20, height: 20 });

  const levelsLabels = [
    t('postJob.technologiesLevels.niceToHave'),
    t('postJob.technologiesLevels.junior'),
    t('postJob.technologiesLevels.regular'),
    t('postJob.technologiesLevels.advanced'),
    t('postJob.technologiesLevels.senior'),
  ];

  const technologyMap = techOptions.reduce((acc, tech) => {
    acc[tech.value] = tech;
    return acc;
  }, {} as Record<string, { label: string; icon?: React.ReactNode }>);

  return (
    <section className='space-y-6'>
      <h2 className='text-xl font-semibold text-center mb-4 dark:text-white'>
        {t('postJob.technologies')}
      </h2>

      <ComboboxControl
        name={PostJobFormFields.technologies}
        control={control}
        label={t('postJob.listOfTechnologies')}
        options={techOptions}
        multiSelect
        placeholder={t('postJob.selectTechnologies')}
      />
      <div className='flex flex-col gap-3'>
        <span className='text-sm'>{`${t(
          'postJob.chooseLevelForEveryTechnology'
        )}:`}</span>
        {selectedTechnologies.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 bg-neutral-100  dark:bg-neutral-900 p-4 border rounded-md'>
            {selectedTechnologies.map((techKey: string) => {
              const tech = technologyMap[techKey];
              return (
                <DotsLevelControl
                  key={techKey}
                  name={`technologiesLevels.${techKey}`}
                  control={control}
                  label={tech.label}
                  icon={tech.icon}
                  levelsLabels={levelsLabels}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
