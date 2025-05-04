import 'i18next';

import pl from '../../public/locales/pl/translation.json';

type DefaultTranslation = typeof pl;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: DefaultTranslation;
    };
  }
}
