'use client';

import * as React from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Dropdown, DropdownOption } from '@/components/ui';

type DropdownControlProps<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  options: DropdownOption[];
  multiple?: boolean;
  showIconsInTrigger?: boolean;
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export const DropdownControl = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  options,
  multiple = false,
  showIconsInTrigger = false,
}: DropdownControlProps<TFieldValues>) => {
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
      <Dropdown
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        multiple={multiple}
        showIconsInTrigger={showIconsInTrigger}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
