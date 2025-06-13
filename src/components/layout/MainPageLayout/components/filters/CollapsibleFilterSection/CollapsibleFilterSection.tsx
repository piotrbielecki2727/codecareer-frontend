import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  scrollable?: boolean;
  defaultOpen?: boolean;
}

export const CollapsibleFilterSection = ({
  icon,
  title,
  children,
  scrollable = false,
  defaultOpen = true,
}: Props) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='flex flex-col gap-3'>
      <div
        className='flex items-center justify-between gap-2 cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className='flex items-center gap-2'>
          {icon}
          <span className='text-xs font-semibold'>{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className='w-4 h-4 text-muted-foreground' />
        ) : (
          <ChevronDown className='w-4 h-4 text-muted-foreground' />
        )}
      </div>
      {isOpen && (
        <div
          className={cn(scrollable ? 'max-h-[300px] overflow-y-auto pr-1' : '')}
        >
          {children}
        </div>
      )}
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
