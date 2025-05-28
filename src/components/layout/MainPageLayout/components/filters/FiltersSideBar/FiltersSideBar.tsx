'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const FiltersSidebar = () => {
  const { t } = useTranslation();

  return (
    <>
      <span>{t('mainPage.filters')}</span>
    </>
  );
};
