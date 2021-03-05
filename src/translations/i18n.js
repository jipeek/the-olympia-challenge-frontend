import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import {LANGUAGE as LANGUAGE_es} from '../locales/es';
import {LANGUAGE as LANGUAGE_en} from '../locales/en';
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      es: {
        translation:LANGUAGE_es
      },
      en: {
        translation: LANGUAGE_en
      },
    }
  });

// i18n.init({
//   interpolation: {
//     format: function (value, format, lng) {
//       if (value instanceof Date) return moment(value).format(format);
//       if (typeof value === "number")
//         return new Intl.NumberFormat().format(value);
//       return value;
//     }
//   }
// });

export default  i18n ;
