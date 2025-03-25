// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) return null;

  return (
    <nav className='w-full px-6 py-4 bg-white shadow-md fixed top-0 z-50 flex items-center justify-between'>
      <div className='text-xl font-bold text-pink-600'>CodeCareer</div>
      <div className='flex items-center gap-4'>
        <Link href='/' className='hover:underline'>
          Home
        </Link>
        <Link href='/jobs' className='hover:underline'>
          Jobs
        </Link>
        <Link href='/profile' className='hover:underline'>
          Profile
        </Link>
        <Button variant='outline'>Sign out</Button>
      </div>
    </nav>
  );
};
