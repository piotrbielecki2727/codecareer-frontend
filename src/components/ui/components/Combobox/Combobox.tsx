'use client';

import * as React from 'react';
import { X, ChevronsUpDown, Check } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/shadcnComponents/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/shadcnComponents/popover';
import { Badge } from '@/components/ui/shadcnComponents/badge';
import { cn } from '@/lib/utils';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';

export interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface ComboboxProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  multiSelect?: boolean;
  className?: string;
  popoverClassName?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  selected,
  onChange,
  placeholder = 'Select...',
  multiSelect = false,
  className,
  popoverClassName,
}) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleSelect = (value: string) => {
    if (multiSelect) {
      const isAlreadySelected = selected.includes(value);
      const newSelected = isAlreadySelected
        ? selected.filter((v) => v !== value)
        : [...selected, value];
      onChange(newSelected);
    } else {
      onChange([value]);
      setOpen(false);
    }
  };

  const clearAll = () => onChange([]);

  const selectedOptions = options.filter((opt) => selected.includes(opt.value));
  const filteredOptions = options.filter(
    (opt) => !selected.includes(opt.value)
  );

  const removeOption = (value: string) => {
    onChange(selected.filter((v) => v !== value));

    if (open) {
      setOpen(false);
      setTimeout(() => setOpen(true), 0);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'border rounded-md px-2 py-1 min-h-[42px] w-full cursor-pointer text-center flex items-center justify-between',
            'bg-white dark:bg-neutral-900',
            'hover:bg-muted dark:hover:bg-neutral-800 transition-colors duration-400 ease-in-out',
            className
          )}
        >
          <div className='flex justify-between align-middle items-center w-full gap-2'>
            <div className='flex flex-wrap gap-2'>
              {selectedOptions.length === 0 ? (
                <span className='text-muted-foreground text-sm'>
                  {placeholder}
                </span>
              ) : (
                selectedOptions.map((opt) => (
                  <Badge
                    key={opt.value}
                    variant='secondary'
                    className='flex items-center gap-3'
                  >
                    {opt.icon && <span>{opt.icon}</span>}
                    <span>{opt.label}</span>
                    <Button
                      type='button'
                      onClick={(e) => {
                        e.stopPropagation();
                        removeOption(opt.value);
                      }}
                      variant='ghost'
                      size='icon'
                      className='h-6 w-6 p-0 text-muted-foreground'
                    >
                      <X className='h-4 w-4' />
                    </Button>
                  </Badge>
                ))
              )}
            </div>

            <div className='flex items-center gap-1'>
              {selected.length > 0 && (
                <Button
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    clearAll();
                  }}
                  variant='ghost'
                  size='icon'
                  className='h-6 w-6 p-0 text-muted-foreground'
                >
                  <X className='h-4 w-4' />
                </Button>
              )}
              <ChevronsUpDown className='h-4 w-4 text-muted-foreground' />
            </div>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className={cn(
          'p-0 min-w-[var(--radix-popover-trigger-width)]',
          popoverClassName
        )}
      >
        <Command>
          <CommandInput placeholder={`${t('search')}...`} />
          <CommandList>
            <CommandEmpty>{t('noResultsFound')}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <span className='w-4 h-4 flex items-center justify-center'>
                    {option.icon}
                  </span>
                  {option.label}
                  {multiSelect && (
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        selected.includes(option.value)
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
