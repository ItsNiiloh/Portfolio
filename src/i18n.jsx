import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import global_pt from "./translations/pt/global.json";

import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
    pt: {
      global: global_pt,
    },
  },
});


export default i18n;