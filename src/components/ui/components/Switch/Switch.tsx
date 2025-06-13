'use client';

import { ShadcnSwitch } from '../../shadcnComponents/switch';
import { Label } from '../Label';
import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<typeof ShadcnSwitch> {
  id?: string;
  label?: string;
  wrapperClassName?: string;
}

export const Switch = ({
  id,
  label,
  className,
  wrapperClassName,
  ...props
}: Props) => {
  return (
    <div className={cn('space-y-2', wrapperClassName)}>
      {label && (
        <Label htmlFor={id} className='text-sm font-medium'>
          {label}
        </Label>
      )}
      <ShadcnSwitch
        id={id}
        className={cn(
          'data-[state=unchecked]:bg-neutral-300 dark:data-[state=unchecked]:bg-input/80',
          'hover:data-[state=unchecked]:bg-neutral-400 dark:hover:data-[state=unchecked]:bg-input/60',

          'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500',
          'hover:data-[state=checked]:from-green-400 hover:data-[state=checked]:to-emerald-400',

          '[&>span]:bg-white',

          'transition-colors duration-200',

          className
        )}
        {...props}
      />
    </div>
  );
};
