'use client';

import * as React from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Textarea } from '@/components/ui';

type TextareaControlProps<TFieldValues extends FieldValues> = {
  /** tekst labelki */
  label: string;
  /** placeholder */
  placeholder?: string;
  /** liczba wierszy */
  rows?: number;
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export const TextareaControl = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  rows = 4,
}: TextareaControlProps<TFieldValues>) => {
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
      <Textarea
        id={name}
        label={label}
        placeholder={placeholder}
        rows={rows}
        value={value as string}
        onChange={onChange}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
