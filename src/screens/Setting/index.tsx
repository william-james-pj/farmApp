import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Dropdown } from "../../components/Dropdown";
import { useTranslation } from "react-i18next";
import { useSetting } from "../../hooks/useSetting";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamListLogged, tempUnitType } from "../../@types/types";

import { RadioGroup } from "../../components/RadioGroup";
import { radioButtonsData } from "../../data/radioButtonData";
import { RadioButtonProps } from "../../@types/radioButton";

type SettingProps = DrawerScreenProps<RootStackParamListLogged, "Setting">;

import * as S from "./styles";

const LANGUAGES = [
  { id: 1, value: "en_US", label: "English" },
  { id: 2, value: "pt_BR", label: "Portugues - BR" },
];

export function Setting({ navigation }: SettingProps) {
  const { i18n, t } = useTranslation();
  const { objSetting, setTemp } = useSetting();
  const [language, setLanguage] = useState(i18n.language);

  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);

    let radio: tempUnitType = "celsius";
    radioButtons.forEach((element) => {
      if (element.selected) radio = (element.value as tempUnitType) || "";
    });
    setTemp(radio);
  }

  const radioBunttonsCorrecting = (): RadioButtonProps[] => {
    return radioButtonsData.map((element) => {
      if (element.value === objSetting.tempUnit) element.selected = true;
      else element.selected = false;

      return element;
    });
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    setRadioButtons(radioBunttonsCorrecting());
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
        <S.Title>{t("generic:tempUnit")}</S.Title>
        <RadioGroup
          radioButtons={radioButtonsData}
          onPress={onPressRadioButton}
        />
      </S.Wrapper>
    </>
  );
}
