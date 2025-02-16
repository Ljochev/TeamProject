import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import mkTranslation from "./locales/mk.json";
import sqTranslation from "./locales/sq.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    mk: {
      translation: mkTranslation,
    },
    sq: {
      translation: sqTranslation,
    },
  },
  lng: "mk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
