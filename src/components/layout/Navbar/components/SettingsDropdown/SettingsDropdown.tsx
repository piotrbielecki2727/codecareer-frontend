'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/components/Dropdown/base';
import { Button } from '@/components/ui';
import {
  ChevronDown,
  Globe,
  Moon,
  Sun,
  Laptop2,
  Check,
  Settings,
  DollarSign,
  Wand,
} from 'lucide-react';

export enum Currency {
  PLN = 'PLN',
  EUR = 'EUR',
  USD = 'USD',
}

type TranslationKey = 'polish' | 'english';

const languages = [
  { code: 'pl', label: 'polish' as TranslationKey },
  { code: 'en', label: 'english' as TranslationKey },
];

const currencyOptions = [
  { label: 'PLN', value: Currency.PLN },
  { label: 'EUR', value: Currency.EUR },
  { label: 'USD', value: Currency.USD },
];

export const SettingsDropdown = () => {
  const { i18n, t } = useTranslation();
  const [currency, setCurrency] = useState<Currency>(Currency.PLN);
  const { setTheme, theme } = useTheme();

  const themeOptions = [
    { label: t('light'), value: 'light', icon: Sun },
    { label: t('dark'), value: 'dark', icon: Moon },
    { label: t('system'), value: 'system', icon: Laptop2 },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='px-4 py-2 flex items-center gap-2'>
          <Settings className='w-4 h-4' />
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[220px] p-2'>
        <div className='flex items-center gap-2 px-2 py-2 text-sm '>
          {t('settings')}
        </div>
        <div className='bg-neutral-300 dark:bg-neutral-600 h-[1px]'></div>
        <div className='flex items-center gap-2 px-2 py-2 text-sm text-muted-foreground'>
          <Globe className='w-4 h-4' />
          {t('chooseLanguage')}
        </div>
        {languages.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className={`flex items-center justify-between px-2 py-2 rounded-md my-1 ${
              i18n.language === code ? 'bg-muted font-medium' : ''
            }`}
          >
            {t(label)}
            {i18n.language === code && <Check className='w-4 h-4 opacity-70' />}
          </DropdownMenuItem>
        ))}
        {/* <div className='bg-gray-100 h-[1px]'></div>
        <div className='flex items-center gap-2 px-2 py-2 mt-3 text-sm text-muted-foreground'>
          <DollarSign className='w-4 h-4' />
          {t('currency')}
        </div>
        {currencyOptions.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setCurrency(value)}
            className={`flex items-center justify-between px-2 py-2 rounded-md my-1 ${
              currency === value ? 'bg-muted font-medium' : ''
            }`}
          >
            {label}
            {currency === value && <Check className='w-4 h-4 opacity-70' />}
          </DropdownMenuItem>
        ))} */}
        <div className='bg-neutral-300 dark:bg-neutral-600 h-[0.5px] mt-3'></div>
        <div className='flex items-center gap-2 px-2 py-2 mt-3 text-sm text-muted-foreground'>
          <Wand className='w-4 h-4' />
          {t('theme')}
        </div>
        {themeOptions.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={`flex items-center gap-2 px-2 py-2 rounded-md my-1 ${
              theme === value ? 'bg-muted font-medium' : ''
            }`}
          >
            <Icon className='w-4 h-4' />
            {label}
            {theme === value && (
              <Check className='ml-auto w-4 h-4 opacity-70' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
