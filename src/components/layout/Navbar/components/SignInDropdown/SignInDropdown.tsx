'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/shadcnComponents/dropdown-menu';
import { Separator } from '@/components/ui/shadcnComponents/separator';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { signInSections } from './constants';
import { Button } from '@/components/ui';
import { useTranslation } from 'react-i18next';

export const SignInDropdown = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          type='button'
          className='group bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 text-white rounded-full px-8 py-4 flex items-center justify-center align-middle'
        >
          {t('signIn')}
          {open ? (
            <ChevronUp className='ml-2 w-4 h-4' />
          ) : (
            <ChevronDown className='ml-2 w-4 h-4' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-100 mt-2 p-4 rounded-xl shadow-xl'
      >
        {signInSections.map((section, index) => (
          <Fragment key={section.title}>
            {index > 0 && <Separator className='my-3' />}

            <div>
              <div className='flex items-center gap-2 mb-2 text-sm font-medium'>
                <div className='bg-muted p-2 rounded-md'>
                  <section.icon className='w-4 h-4' />
                </div>
                {t(section.title)}
              </div>
              <div className='flex flex-col gap-1'>
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className='w-full text-left text-md px-2 py-2 rounded-md hover:bg-muted transition'
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
