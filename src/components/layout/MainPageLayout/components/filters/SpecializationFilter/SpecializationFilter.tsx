'use client';

import { specializations } from '@/lib';
import { useState } from 'react';
import { SpecializationPill } from '../SpecializationPill';

export const SpecializationFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className='flex flex-wrap gap-8 p-2'>
      {specializations.map((spec) => (
        <SpecializationPill
          key={spec.value}
          spec={spec}
          isSelected={selected === spec.value}
          onClick={() => setSelected(spec.value)}
        />
      ))}
    </div>
  );
};
