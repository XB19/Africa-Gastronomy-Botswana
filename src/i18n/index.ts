import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";

// English only — no browser-language detection, no switcher. All copy still
// runs through useTranslation()/common.json rather than being hardcoded, so
// this stays a one-file change if a second language is ever needed.
export const supportedLanguages = [{ code: "en", label: "English" }] as const;

export type SupportedLanguageCode = (typeof supportedLanguages)[number]["code"];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en"],
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
