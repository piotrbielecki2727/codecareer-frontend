'use client';

import { Input } from '@/components/ui';
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <Input
      className='space-y-0 w-[500px]'
      placeholder='Szukaj ofert pracy...'
      isSearchBar
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
