'use client';

import { cn } from '@/lib/utils';

type Props = {
  label: string;
  value: number;
  icon?: React.ReactNode;
  onSelect?: (value: number) => void;
  levelsLabels?: string[];
  disabled?: boolean;
  className?: string;
};

export const DotsLevel = ({
  label,
  value,
  icon,
  onSelect,
  levelsLabels = [],
  disabled = false,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        ' p-3 rounded-md shadow-md bg-neutral-100 dark:bg-neutral-800 h-full ',
        className
      )}
    >
      <div className='flex gap-2 mb-3'>
        {icon && (
          <div className=' flex items-center align-middle justify-center'>
            {icon}
          </div>
        )}
        <span className='text-md font-medium'>{label}</span>
      </div>
      <div className='flex gap-1 mb-2'>
        {[1, 2, 3, 4, 5].map((level) => {
          const isSelected = level <= value;
          return onSelect ? (
            <button
              key={level}
              type='button'
              onClick={() => onSelect(level)}
              disabled={disabled}
              className={cn(
                'w-4 h-4 rounded-full transition duration-200',
                'hover:scale-110 hover:shadow-md',
                isSelected
                  ? 'bg-gradient-to-r from-purple-600 to-blue-400'
                  : 'bg-neutral-200 dark:bg-neutral-700'
              )}
            />
          ) : (
            <div
              key={level}
              className={cn(
                'w-4 h-4 rounded-full transition duration-200',
                isSelected
                  ? 'bg-gradient-to-r from-purple-600 to-blue-400'
                  : 'bg-muted'
              )}
            />
          );
        })}
      </div>
      {value > 0 && levelsLabels[value - 1] && (
        <p className='text-sm text-muted-foreground'>
          {levelsLabels[value - 1]}
        </p>
      )}
    </div>
  );
};
