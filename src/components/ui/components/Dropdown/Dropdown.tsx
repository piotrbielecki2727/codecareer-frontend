'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './base';

export interface DropdownOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface BaseProps {
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  showIconsInTrigger?: boolean;
}

// 👇 SINGLE SELECT
interface SingleSelectProps extends BaseProps {
  multiple?: false;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

// 👇 MULTI SELECT
interface MultiSelectProps extends BaseProps {
  multiple: true;
  value: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
}

// 👇 UNION
type DropdownProps = SingleSelectProps | MultiSelectProps;

export const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  triggerClassName,
  contentClassName,
  itemClassName,
  multiple = false,
  showIconsInTrigger = false,
}: DropdownProps): React.ReactElement => {
  // Use type guards to handle the union type
  const selected = multiple
    ? options.filter((opt) => Array.isArray(value) && value.includes(opt.value))
    : options.find((opt) => opt.value === value);

  const isSelected = (val: string | number): boolean => {
    if (multiple) {
      return Array.isArray(value) && value.includes(val);
    }
    return val === value;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          variant='outline'
          className={cn(
            'justify-between w-full text-base px-4 py-2',
            triggerClassName
          )}
        >
          <span className='flex flex-wrap items-center gap-2 truncate'>
            {multiple ? (
              Array.isArray(selected) && selected.length > 0 ? (
                selected.map((opt) => (
                  <span
                    key={String(opt.value)}
                    className='flex items-center gap-1'
                  >
                    {showIconsInTrigger && opt.icon && (
                      <span className='w-4 h-4'>{opt.icon}</span>
                    )}
                    {opt.label}
                  </span>
                ))
              ) : (
                placeholder
              )
            ) : selected ? (
              <span className='flex items-center gap-1'>
                {showIconsInTrigger &&
                  !Array.isArray(selected) &&
                  selected.icon && (
                    <span className='w-4 h-4'>{selected.icon}</span>
                  )}
                {!Array.isArray(selected) && selected.label}
              </span>
            ) : (
              placeholder
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={4}
        className={cn(
          'min-w-0 w-[var(--radix-dropdown-menu-trigger-width)] p-1 shadow-md border rounded-md bg-white z-50',
          contentClassName
        )}
      >
        {options.map((opt) => {
          const selected = isSelected(opt.value);

          return (
            <DropdownMenuItem
              key={String(opt.value)}
              onSelect={() => {
                if (multiple) {
                  if (Array.isArray(value)) {
                    const nextValue = selected
                      ? value.filter((v) => v !== opt.value)
                      : [...value, opt.value];
                    // For multi-select, we need to cast onChange
                    (
                      onChange as
                        | ((value: (string | number)[]) => void)
                        | undefined
                    )?.(nextValue);
                  }
                } else {
                  // For single select, we can safely cast onChange
                  (
                    onChange as ((value: string | number) => void) | undefined
                  )?.(opt.value);
                }
              }}
              disabled={opt.disabled}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted focus:bg-muted cursor-pointer',
                itemClassName
              )}
            >
              {opt.icon && <span className='w-5 h-5'>{opt.icon}</span>}
              <span className='flex-1'>{opt.label}</span>
              {selected && <Check className='w-4 h-4 text-primary ml-auto' />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
