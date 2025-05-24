'use client';

import { InputWithCounter } from '@/components/ui';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface Props<T extends FieldValues>
  extends UseControllerProps<T, FieldPath<T>> {
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
}

export const InputWithCounterControl = <T extends FieldValues>({
  name,
  control,
  rules,
  label,
  min,
  max,
  placeholder,
}: Props<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className='space-y-2'>
      <InputWithCounter
        id={name}
        value={typeof value === 'number' && !isNaN(value) ? value : 0}
        onChange={onChange}
        label={label}
        min={min}
        max={max}
        placeholder={placeholder}
      />
      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};
