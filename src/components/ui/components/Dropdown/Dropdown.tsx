'use client';

import * as React from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
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
  customContent?: React.ReactNode;
}

interface BaseProps {
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  triggerClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
  showIconsInTrigger?: boolean;
  icon?: React.ReactNode; // 👈 NEW
}

interface SingleSelectProps extends BaseProps {
  multiple?: false;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

interface MultiSelectProps extends BaseProps {
  multiple: true;
  value: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
}

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
  icon, // 👈 NEW PROP
}: DropdownProps): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const selected: DropdownOption[] | DropdownOption | undefined = multiple
    ? options.filter((opt) => Array.isArray(value) && value.includes(opt.value))
    : options.find((opt) => opt.value === value);

  const isSelected = (val: string | number): boolean => {
    return multiple
      ? Array.isArray(value) && value.includes(val)
      : val === value;
  };

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className='mt-1 bg-white dark:bg-neutral-900 hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out'
        asChild
        disabled={disabled}
      >
        <Button
          variant='outline'
          className={cn(
            'justify-between w-full text-base px-3 py-2 outline-none focus-visible:outline-none hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out',
            triggerClassName
          )}
        >
          <span className='flex items-center gap-2 truncate'>
            {icon && (
              <span className='w-4 h-4 text-muted-foreground'>{icon}</span>
            )}
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
                  <span className='text-muted-foreground text-sm'>
                    {placeholder}
                  </span>
                )
              ) : selected && !Array.isArray(selected) ? (
                <span className='flex items-center gap-1 text-sm'>
                  {showIconsInTrigger && selected.icon && (
                    <span className='w-4 h-4'>{selected.icon}</span>
                  )}
                  {selected.label}
                </span>
              ) : (
                <span className='text-muted-foreground text-sm'>
                  {placeholder}
                </span>
              )}
            </span>
          </span>

          {!disabled && (
            <span className='ml-auto pl-2'>
              {isOpen ? (
                <ChevronUp className='w-4 h-4 text-muted-foreground' />
              ) : (
                <ChevronDown className='w-4 h-4 text-muted-foreground' />
              )}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={4}
        className={cn(
          'min-w-0 w-[var(--radix-dropdown-menu-trigger-width)] p-1 border rounded-md z-50',
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
                    (
                      onChange as
                        | ((value: (string | number)[]) => void)
                        | undefined
                    )?.(nextValue);
                  }
                } else {
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
              <span className='flex-1'>{opt.customContent ?? opt.label}</span>

              {selected && <Check className='w-4 h-4 text-primary ml-auto' />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
