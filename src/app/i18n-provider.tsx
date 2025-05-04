'use client';

import { useEffect, useState } from 'react';
import { initI18n } from '@/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!i18n.isInitialized) {
      initI18n().then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
