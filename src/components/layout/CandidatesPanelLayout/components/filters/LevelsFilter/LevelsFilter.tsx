'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import { CollapsibleFilterSection } from '../CollapsibleFilterSection';
import { Badge } from '../Badge';
import { levels } from '@/lib/data/levels';
import { IOption } from '@/types/interfaces';
import { useTranslation } from 'react-i18next';

interface LevelsFilterProps {
  selected: string[];
  onToggle: (value: string) => void;
}

export const LevelsFilter = ({ selected, onToggle }: LevelsFilterProps) => {
  const { t } = useTranslation();
  return (
    <CollapsibleFilterSection
      icon={<Layers className='w-6 h-6' />}
      title={t('postJob.positionLevel')}
    >
      <div className='flex flex-wrap gap-2 mt-2'>
        {levels.map((level: IOption) => (
          <Badge
            key={level.value}
            label={level.label}
            selected={selected.includes(level.value)}
            onClick={() => onToggle(level.value)}
          />
        ))}
      </div>
    </CollapsibleFilterSection>
  );
};
