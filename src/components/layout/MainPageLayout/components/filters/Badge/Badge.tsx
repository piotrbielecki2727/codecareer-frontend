import React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  removable?: boolean;
  className?: string;
}

export const Badge = ({
  label,
  icon,
  selected,
  onClick,
  removable = false,
  className,
}: BadgeProps) => (
  <div
    onClick={removable ? undefined : onClick}
    className={cn(
      'flex items-center gap-2 px-2 py-1 rounded-full border text-xs transition-colors',
      selected
        ? 'bg-white dark:bg-neutral-600 dark:text-white border-primary'
        : 'bg-neutral-200 dark:bg-neutral-800 border-transparent hover:bg-neutral-300 dark:hover:bg-neutral-700',
      !removable && 'cursor-pointer',
      className
    )}
  >
    {icon && <div className='w-4 h-4'>{icon}</div>}
    <span>{label}</span>
    {removable && (
      <X
        className='w-3.5 h-3.5 ml-2 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      />
    )}
  </div>
);
