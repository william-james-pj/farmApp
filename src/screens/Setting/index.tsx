import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Dropdown } from "../../components/Dropdown";
import { useTranslation } from "react-i18next";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamListLogged } from "../../@types/types";

type SettingProps = DrawerScreenProps<RootStackParamListLogged, "Setting">;

import * as S from "./styles";

const LANGUAGES = [
  { id: 1, value: "en_US", label: "English" },
  { id: 2, value: "pt_BR", label: "Portugues - BR" },
];

export function Setting({ navigation }: SettingProps) {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <>
      <Header
        openDrawer={navigation.openDrawer}
        title={t("message:headerSetting")}
      />
      <S.Wrapper>
        <S.Title>{t("message:select")}</S.Title>
        <Dropdown
          itemsData={LANGUAGES}
          placeholder={t("generic:languages")}
          value={language}
          setValue={setLanguage}
        />
      </S.Wrapper>
    </>
  );
}
