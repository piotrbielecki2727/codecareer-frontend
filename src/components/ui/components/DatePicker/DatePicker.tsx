'use client';

import * as React from 'react';
import { format, parseISO } from 'date-fns';
import { enUS, pl } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../shadcnComponents/popover';
import { Button } from '../Button';
import { Calendar } from '../../shadcnComponents/calendar';

interface DatePickerProps {
  selected: string | undefined; // ISO string
  onSelect: (date: string | undefined) => void;
  className?: string;
}

export function DatePicker({ selected, onSelect, className }: DatePickerProps) {
  const { i18n, t } = useTranslation();

  const currentLocale = React.useMemo(() => {
    return i18n.language === 'pl' ? pl : enUS;
  }, [i18n.language]);

  const selectedDate = selected ? parseISO(selected) : undefined;

  const handleSelect = (date: Date | undefined) => {
    onSelect(date ? format(date, 'yyyy-MM-dd') : undefined);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={cn(
              'justify-start text-left font-normal w-full dark:bg-neutral-900 dark:hover:bg-neutral-800',
              !selected && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {selectedDate ? (
              format(selectedDate, 'PPP', { locale: currentLocale })
            ) : (
              <span>{t('postJob.pickDate')}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className='min-w-0 w-[var(--radix-popover-trigger-width)] p-0'
          align='start'
        >
          <Calendar
            mode='single'
            selected={selectedDate}
            onSelect={handleSelect}
            initialFocus
            locale={currentLocale}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
