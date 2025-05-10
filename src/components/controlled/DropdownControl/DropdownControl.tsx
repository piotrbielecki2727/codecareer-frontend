'use client';

import * as React from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Dropdown, DropdownOption } from '@/components/ui';

type DropdownControlProps<
  TFieldValues extends FieldValues,
  TOption extends string | number
> = {
  label: string;
  placeholder?: string;
  options: DropdownOption<TOption>[];
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export const DropdownControl = <
  TFieldValues extends FieldValues,
  TOption extends string | number
>({
  name,
  control,
  rules,
  label,
  placeholder,
  options,
}: DropdownControlProps<TFieldValues, TOption>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='block text-sm font-medium'>
        {label}
      </label>
      <Dropdown<TOption>
        options={options}
        value={value as TOption}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
