'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IOption } from '@/types/interfaces';
import { getEmploymentTypes } from '@/lib';
import { Badge, CollapsibleFilterSection } from '..';

interface EmploymentTypeFilterProps {
  selected: string[];
  onToggle: (value: string) => void;
}

export const EmploymentTypeFilter = ({
  selected,
  onToggle,
}: EmploymentTypeFilterProps) => {
  const { t } = useTranslation();
  const employmentTypes: IOption[] = getEmploymentTypes(t);

  return (
    <CollapsibleFilterSection
      icon={<FileText className='w-6 h-6' />}
      title={t('postJob.contractType')}
    >
      <div className='flex flex-wrap gap-2 mt-2'>
        {employmentTypes.map((type) => (
          <Badge
            key={type.value}
            label={type.label}
            selected={selected.includes(type.value)}
            onClick={() => onToggle(type.value)}
          />
        ))}
      </div>
    </CollapsibleFilterSection>
  );
};
