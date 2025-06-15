'use client';

import { Input } from '@/components/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const { t } = useTranslation();
  return (
    <Input
      className='space-y-0 w-[500px]'
      placeholder={t('searchForCandidates')}
      isSearchBar
      value={value}
      onChange={(e) => onChange(e.target.value)}
      isDeleteButton
    />
  );
};
