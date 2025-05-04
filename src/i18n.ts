import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const initI18n = async () => {
  return i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'pl',
      supportedLngs: ['pl', 'en'],
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      backend: {
        loadPath: '/locales/{{lng}}/translation.json', 
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

export default i18n;
