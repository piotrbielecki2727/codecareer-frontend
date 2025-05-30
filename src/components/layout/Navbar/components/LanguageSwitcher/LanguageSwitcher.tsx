'use client';

import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/components/Dropdown/base';
import { Button } from '@/components/ui';
import { ChevronDown, Check, Globe } from 'lucide-react';

type LanguageKey = 'polish' | 'english';

const languages: { code: string; label: LanguageKey }[] = [
  { code: 'pl', label: 'polish' },
  { code: 'en', label: 'english' },
];

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguageData =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='px-4 py-2 flex items-center gap-2'>
          {currentLanguageData.code.toUpperCase()}
          <ChevronDown className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[200px] p-2'>
        <div className='px-2 py-2 text-sm flex gap-2 justify-start items-center'>
          <Globe className='w-4 h-4' />
          <span>{t('chooseLanguage')}</span>
        </div>
        {languages.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={`flex items-center justify-between px-2 py-2 rounded-md my-1 ${
              i18n.language === code ? 'bg-muted font-medium' : ''
            }`}
          >
            <span className='flex items-center gap-2'>{t(label)}</span>
            {i18n.language === code && <Check className='w-4 h-4 opacity-70' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
