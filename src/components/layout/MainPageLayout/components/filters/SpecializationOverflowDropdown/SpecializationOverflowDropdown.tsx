'use client';

import React from 'react';
import { IOption } from '@/types/interfaces';
import { SpecializationPill } from '../SpecializationPill';
import { Dropdown } from '@/components/ui';

interface Props {
  options: IOption[];
  value: string | null;
  onChange: (value: string) => void;
}

export const SpecializationOverflowDropdown = ({
  options,
  value,
  onChange,
}: Props) => {
  return (
    <Dropdown
      options={options.map((spec) => ({
        label: spec.label,
        value: spec.value,
        customContent: (
          <SpecializationPill
            key={spec.value}
            spec={spec}
            isSelected={spec.value === value}
            onClick={() => {}}
            className='!w-10 !h-10 !text-xs !ring-0'
          />
        ),
      }))}
      value={value ?? undefined}
      onChange={(val) => onChange(val as string)}
      placeholder='⋯'
      triggerClassName='w-10 h-10 rounded-full bg-muted'
      contentClassName='grid grid-cols-3 gap-2 p-2 w-48'
    />
  );
};
