import i18next, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { format as formatDate } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

type tlocales = {
  [key: string]: any;
};
const locales: tlocales = { en_US: enUS, pt_BR: ptBR };

import { br } from "./br";
import { en } from "./en";

const resources = {
  en_US: en,
  pt_BR: br,
};

const languageDetector = {
  type: "languageDetector" as ModuleType,
  async: true,
  detect: async (callback: any) => {
    const storedLanguage = await AsyncStorage.getItem("language");

    if (storedLanguage) {
      return callback(storedLanguage);
    }

    const iHaveThisLanguage = "pt_BR";

    return callback(iHaveThisLanguage);
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem("language", language);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (!value || value === "" || value === undefined || value === null) {
          return "";
        }

        const [type, mask] = format?.split("|") || "";
        if (type === "date") {
          const dateFormat = formatDate(value, mask, {
            locale: locales[lng || ""],
          });
          return dateFormat.charAt(0).toUpperCase() + dateFormat.slice(1);
        }

        return value;
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
