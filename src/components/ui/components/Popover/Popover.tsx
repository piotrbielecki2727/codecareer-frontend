'use client';

import {
  Popover as ShadcnPopover,
  PopoverTrigger as ShadcnPopoverTrigger,
  PopoverContent as ShadcnPopoverContent,
} from '@/components/ui/shadcnComponents/popover';
import { Separator } from '@/components/ui/shadcnComponents/separator';
import { ReactNode } from 'react';

type CustomPopoverProps = {
  trigger: ReactNode;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
};

export const Popover = ({
  trigger,
  title,
  children,
  contentClassName,
}: CustomPopoverProps) => {
  return (
    <ShadcnPopover>
      <ShadcnPopoverTrigger asChild>{trigger}</ShadcnPopoverTrigger>
      <ShadcnPopoverContent align='end' className={contentClassName}>
        {title && (
          <div className='flex items-center justify-between mb-2'>
            <h3 className='text-sm font-medium'>{title}</h3>
          </div>
        )}
        {title && <Separator className='mb-3' />}
        {children}
      </ShadcnPopoverContent>
    </ShadcnPopover>
  );
};
