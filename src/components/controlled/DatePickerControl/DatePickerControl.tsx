'use client';

import { DatePicker } from '@/components/ui';
import {
  useController,
  UseControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

type DatePickerControlProps<TFieldValues extends FieldValues> = {
  label: string;
  className?: string;
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export function DatePickerControl<TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  className,
}: DatePickerControlProps<TFieldValues>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className='space-y-2'>
      <label htmlFor={name} className='block text-sm font-medium'>
        {label}
      </label>

      <DatePicker className={className} selected={value} onSelect={onChange} />

      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
}
