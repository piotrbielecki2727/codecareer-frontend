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
        className={cn(
          'min-h-[6rem] resize-y',
          'bg-white hover:bg-muted',
          'dark:bg-neutral-900 dark:hover:bg-neutral-800',
          'transition-colors duration-400 ease-in-out',
          className
        )}
        {...props}
      />
    </div>
  );
};
