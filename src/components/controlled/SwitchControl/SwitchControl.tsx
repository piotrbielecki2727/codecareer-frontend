'use client';

import { Switch } from '@/components/ui';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface SwitchControlProps<TFieldValues extends FieldValues>
  extends UseControllerProps<TFieldValues, FieldPath<TFieldValues>> {
  label?: string;
  wrapperClassName?: string;
}

export const SwitchControl = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  wrapperClassName,
}: SwitchControlProps<TFieldValues>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className='space-y-2'>
      <Switch
        id={name}
        checked={value}
        onCheckedChange={onChange}
        label={label}
        wrapperClassName={wrapperClassName}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
