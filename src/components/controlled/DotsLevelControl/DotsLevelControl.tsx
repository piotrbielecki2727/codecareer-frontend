'use client';

import { DotsLevel } from '@/components/ui';
import {
  useController,
  UseControllerProps,
  FieldValues,
} from 'react-hook-form';

type Props<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & {
    label: string;
    icon?: React.ReactNode;
    levelsLabels?: string[];
  };

export const DotsLevelControl = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  icon,
  levelsLabels,
}: Props<TFieldValues>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className='space-y-1'>
      <DotsLevel
        label={label}
        value={value}
        onSelect={onChange}
        icon={icon}
        levelsLabels={levelsLabels}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
