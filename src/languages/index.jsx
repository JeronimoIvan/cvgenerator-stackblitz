import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import pt from './pt.json';

const currentLanguage = localStorage.getItem('LANGUAGE');

i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    pt: { ...pt },
  },
  lng: currentLanguage ? currentLanguage : navigator.language.slice(0, 2),
});
