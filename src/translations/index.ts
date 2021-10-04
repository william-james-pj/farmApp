import { NativeModules, Platform } from "react-native";
import i18next, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { br } from "./br";
import { en } from "./en";

const resources = {
  en_US: en,
  pt_BR: br,
};

type tnormalizeTranslate = {
  [key: string]: string;
};

const normalizeTranslate: tnormalizeTranslate = {
  en_US: "en_US",
  pt_BR: "pt_BR",
  en: "en_US",
  pt_US: "pt_BR",
};

const languageDetector = {
  type: "languageDetector" as ModuleType,
  async: true,
  detect: async (callback: any) => {
    const storedLanguage = await AsyncStorage.getItem("language");

    if (storedLanguage) {
      return callback(storedLanguage);
    }

    let phoneLanguage = null;
    if (Platform.OS === "ios")
      phoneLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    else phoneLanguage = NativeModules.I18Manager.localeIdentifier;

    const iHaveThisLanguage = normalizeTranslate[phoneLanguage] || "pt_BR";

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
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
