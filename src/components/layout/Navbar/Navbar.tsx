'use client';

import Link from 'next/link';
import React from 'react';
import { SettingsDropdown, SignInDropdown, UserDropdown } from './components';
import { useAuth } from '@/hooks';
import { Button } from '@/components/ui';
import { useTranslation } from 'react-i18next';
import { Role } from '@/types';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/routes';

export const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const { role } = user || {};

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white dark:bg-background p-4 flex justify-between items-center shadow-sm dark:shadow-zinc-800'>
      <Link
        href='/'
        className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'
      >
        CodeCareer
      </Link>
      <div className='flex gap-6 justify-center items-center'>
        {!isAuthenticated && <SignInDropdown />}
        {isAuthenticated && role === Role.EMPLOYER && (
          <Button
            onClick={() => router.push(ROUTES.EMPLOYER.POST_A_JOB)}
            variant='outline'
          >
            <span className='bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent font-bold'>
              {t('postAJobOffer')}
            </span>
          </Button>
        )}
        {isAuthenticated && <UserDropdown />}
        <SettingsDropdown />
      </div>
    </div>
  );
};
