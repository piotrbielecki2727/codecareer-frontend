'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui';
import { CollapsibleFilterSection } from '../CollapsibleFilterSection';
import { SquareCodeIcon } from 'lucide-react';
import { technologies } from '@/lib/data/technologies';
import { Badge } from '../Badge';
import { useTranslation } from 'react-i18next';

interface TechnologiesFilterProps {
  selected: string[];
  onToggle: (value: string) => void;
}

export const TechnologiesFilter = ({
  selected,
  onToggle,
}: TechnologiesFilterProps) => {
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  return (
    <CollapsibleFilterSection
      icon={<SquareCodeIcon className='w-6 h-6' />}
      title={t('postJob.technologies')}
      scrollable
    >
      <div className='flex flex-col gap-6'>
        <Input
          placeholder='Szukaj technologii...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='text-xs h-8'
        />
        <div className='flex flex-wrap gap-2'>
          {technologies({ className: 'w-4 h-4' })
            .filter((t) => t.label.toLowerCase().includes(search.toLowerCase()))
            .map((t) => (
              <Badge
                key={t.value}
                label={t.label}
                icon={t.icon}
                selected={selected.includes(t.value)}
                onClick={() => onToggle(t.value)}
              />
            ))}
        </div>
      </div>
    </CollapsibleFilterSection>
  );
};
