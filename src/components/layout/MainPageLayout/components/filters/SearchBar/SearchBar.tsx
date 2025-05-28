'use client';

import { Input } from '@/components/ui';
import React from 'react';

export const SearchBar = () => {
  return (
    <Input
      className='space-y-0 w-[500px]'
      placeholder='Szukaj ofert pracy...'
      isSearchBar
    />
  );
};
