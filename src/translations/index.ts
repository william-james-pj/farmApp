import { Platform, NativeModules } from "react-native";
import i18next, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { format as formatDate } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

import { br } from "./br";
import { en } from "./en";

type tlocales = {
  [key: string]: any;
};
const locales: tlocales = { en_US: enUS, pt_BR: ptBR };

const normalizeTranslate: tlocales = {
  en_US: "en_US",
  pt_BR: "pt_BR",
  en: "en_US",
  pt_US: "pt_BR",
};

const resources = {
  en_US: en,
  pt_BR: br,
};

const languageDetector = {
  type: "languageDetector" as ModuleType,
  async: true,
  detect: async (callback: any) => {
    const storedLanguage = await AsyncStorage.getItem("language");

    if (storedLanguage) return callback(storedLanguage);

    let language = null;
    if (Platform.OS === "ios")
      language = NativeModules.SettingsManager.settings.AppleLocale;
    else language = NativeModules.I18nManager.localeIdentifier;

    let translateNormalize = normalizeTranslate[language] || "pt_BR";

    return callback(translateNormalize);
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
