'use client';

import * as React from 'react';
import { Textarea as ShadcnTextarea } from './base';
import { Label } from '../Label';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends Omit<React.ComponentProps<typeof ShadcnTextarea>, 'id'> {
  id: string;
  label: string;
  placeholder?: string;
}

export const Textarea = ({
  id,
  label,
  placeholder,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className='space-y-2'>
      <Label htmlFor={id} className='text-sm font-medium'>
        {label}
      </Label>
      <ShadcnTextarea
        id={id}
        placeholder={placeholder}
        className={cn('min-h-[6rem] resize-y', className)}
        {...props}
      />
    </div>
  );
};
