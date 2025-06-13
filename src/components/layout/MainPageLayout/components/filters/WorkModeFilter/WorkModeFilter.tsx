'use client';

import React from 'react';
import { MapPinned } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CollapsibleFilterSection } from '../CollapsibleFilterSection';
import { Badge } from '../Badge';
import { IOption } from '@/types/interfaces';
import { getWorkModes } from '@/lib';

interface WorkModeFilterProps {
  selected: string[];
  onToggle: (value: string) => void;
}

export const WorkModeFilter = ({ selected, onToggle }: WorkModeFilterProps) => {
  const { t } = useTranslation();
  const workModes: IOption[] = getWorkModes(t);

  return (
    <CollapsibleFilterSection
      icon={<MapPinned className='w-6 h-6' />}
      title={t('postJob.workMode')}
    >
      <div className='flex flex-wrap gap-2 mt-2'>
        {workModes.map((mode) => (
          <Badge
            key={mode.value}
            label={mode.label}
            selected={selected.includes(mode.value)}
            onClick={() => onToggle(mode.value)}
          />
        ))}
      </div>
    </CollapsibleFilterSection>
  );
};
