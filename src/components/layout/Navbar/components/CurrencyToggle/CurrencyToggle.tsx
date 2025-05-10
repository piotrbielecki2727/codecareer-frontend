'use client';

import { Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/components/Dropdown/base';
import { Button } from '@/components/ui';
import { useState } from 'react';

export enum Currency {
  PLN = 'PLN',
  EUR = 'EUR',
  USD = 'USD',
}

interface ICurrencyOption {
  label: string;
  value: Currency;
}

const currencyOptions: ICurrencyOption[] = [
  { label: 'PLN', value: Currency.PLN },
  { label: 'EUR', value: Currency.EUR },
  { label: 'USD', value: Currency.USD },
];

export const CurrencyToggle = () => {
  const [currency, setCurrency] = useState<Currency>(Currency.PLN);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-muted rounded-md'
        >
          <span className='font-medium'>{currency}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-1' align='center'>
        {currencyOptions.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setCurrency(value)}
            className={`flex items-center gap-2 p-2 ${
              currency === value ? 'bg-muted font-semibold' : ''
            }`}
          >
            {label}
            {currency === value && (
              <Check className='ml-auto w-4 h-4 opacity-70' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
