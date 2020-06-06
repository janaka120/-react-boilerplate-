// import i18n from 'i18next';
// import LanguageDetector from "i18next-browser-languagedetector";
// import {initReactI18next} from 'react-i18next';
// import XHR from 'i18next-xhr-backend';
// import languageEN from './en.json';
// import languageJP from './jp.json';

// i18n
// .use(XHR)
// .use(LanguageDetector)
// .use(initReactI18next)
// .init({
//     resources: {
//         en: { translation: languageEN},
//         jp: {translation: languageJP}
//     },
//     /* default language when load the website in browser */
//     lng: "en",
//     /* When react i18next not finding any language to as default in borwser */
//     fallbackLng: "en",
//     /* debugger For Development environment */
//     debug: true,
//     ns: ["translations"],
//     defaultNS: "translations",
//     keySeparator: false,
//     interpolation: {
//         escapeValue: false,
//     },
//     react: {
//         wait: true,
//         bindI18n: 'languageChanged loaded',
//         bindStore: 'added removed',
//         nsMode: 'default',
//         useSuspense: false
//     }
// })

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import languageEN from './en.json';
import languageJP from './jp.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources : {
      en: {
        translation: languageEN
      },
      jp: {
        translation: languageJP
      },
    },
    lng: "en",
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: false
    }
  });

  export default i18n;