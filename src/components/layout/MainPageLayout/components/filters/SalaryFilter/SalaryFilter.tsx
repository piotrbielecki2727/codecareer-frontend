'use client';

import React from 'react';
import { Banknote } from 'lucide-react';
import { CollapsibleFilterSection } from '../CollapsibleFilterSection';
import { Switch, Input } from '@/components/ui';
import { useTranslation } from 'react-i18next';

interface SalaryFilterProps {
  onlyWithRange: boolean;
  minSalary: string;
  onOnlyWithRangeToggle: () => void;
  onMinSalaryChange: (value: string) => void;
}

export const SalaryFilter = ({
  onlyWithRange,
  minSalary,
  onOnlyWithRangeToggle,
  onMinSalaryChange,
}: SalaryFilterProps) => {
  const { t } = useTranslation();

  return (
    <CollapsibleFilterSection
      icon={<Banknote className='w-6 h-6' />}
      title={t('postJob.salary')}
    >
      <div className='flex flex-col gap-2 mt-2'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm'>{t('showOffersOnlyWithRanges')}</span>
          <Switch
            checked={onlyWithRange}
            onCheckedChange={onOnlyWithRangeToggle}
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm'>{t('minimumSalary')}</span>
          <Input
            className='w-20 mb-2'
            value={minSalary}
            onChange={(e) => onMinSalaryChange(e.target.value)}
            placeholder='5000'
          />
        </div>
      </div>
    </CollapsibleFilterSection>
  );
};
