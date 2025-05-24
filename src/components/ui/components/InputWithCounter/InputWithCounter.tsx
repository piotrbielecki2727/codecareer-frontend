'use client';

import { ChevronUp, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from '../Button';
import { cn } from '@/lib/utils';
import { ShadcnInput } from '../Input/base';

interface Props {
  id: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const InputWithCounter = ({
  id,
  value,
  onChange,
  min = 0,
  max = 100,
  label,
  placeholder,
  className,
}: Props) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [internal, setInternal] = useState(String(value));

  const clamp = (val: number) => Math.min(Math.max(val, min), max);

  const updateValue = (direction: 'up' | 'down') => {
    const next = direction === 'up' ? clamp(value + 1) : clamp(value - 1);
    setInternal(String(next));
    onChange(next);
  };

  const handleMouseDown = (direction: 'up' | 'down') => {
    updateValue(direction);
    intervalRef.current = setInterval(() => updateValue(direction), 100);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (!/^\d*$/.test(raw)) return;

    const parsed = Number(raw);
    if (!isNaN(parsed)) {
      const clamped = clamp(parsed);
      setInternal(String(clamped));
      onChange(clamped);
    } else {
      setInternal('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      updateValue('up');
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      updateValue('down');
    }
  };

  return (
    <div className='space-y-2 flex flex-col'>
      {label && (
        <label htmlFor={id} className='text-sm font-medium '>
          {label}
        </label>
      )}
      <div className='relative flex'>
        <ShadcnInput
          id={id}
          type='text'
          inputMode='numeric'
          pattern='[0-9]*'
          value={internal}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'pr-10 bg-white dark:bg-neutral-900 ',
            'hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out',
            className
          )}
        />
        <div className='absolute right-0 top-0 bottom-0 flex flex-col divide-y border-l border-r rounded-r-md border-b border-t  overflow-hidden'>
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='h-[50%] w-6 p-0 text-muted-foreground rounded-none'
            onMouseDown={() => handleMouseDown('up')}
            onMouseUp={stopInterval}
            onMouseLeave={stopInterval}
          >
            <ChevronUp className='h-4 w-4' />
          </Button>
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='h-[50%] w-6 p-0 text-muted-foreground rounded-none'
            onMouseDown={() => handleMouseDown('down')}
            onMouseUp={stopInterval}
            onMouseLeave={stopInterval}
          >
            <ChevronDown className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};
