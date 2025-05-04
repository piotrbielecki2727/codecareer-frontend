'use client';

import Link from 'next/link';
import React from 'react';
import {
  CurrencyToggle,
  LanguageSwitcher,
  SignInDropdown,
  ThemeToggle,
  UserDropdown,
} from './components';
import { useAuth } from '@/hooks';

export const Navbar = () => {
  const { isAuthenticated } = useAuth();

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
        <CurrencyToggle />
        <LanguageSwitcher />
        <ThemeToggle />
        {isAuthenticated && <UserDropdown />}
      </div>
    </div>
  );
};
