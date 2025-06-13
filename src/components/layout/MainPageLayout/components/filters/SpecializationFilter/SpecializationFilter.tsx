'use client';

import { specializations } from '@/lib';
import { SpecializationPill } from '../SpecializationPill';

interface SpecializationFilterProps {
  selected: string | null;
  onChange: (value: string | null) => void;
}

export const SpecializationFilter = ({
  selected,
  onChange,
}: SpecializationFilterProps) => {
  const handleClick = (value: string) => {
    onChange(selected === value ? null : value);
  };

  return (
    <div className='flex flex-wrap gap-8 p-2'>
      {specializations.map((spec) => (
        <SpecializationPill
          key={spec.value}
          spec={spec}
          isSelected={selected === spec.value}
          isAnySelected={selected !== null}
          onClick={() => handleClick(spec.value)}
        />
      ))}
    </div>
  );
};
