import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import MySVGImage from "../../assets/svg/Track.svg";

import { ButtonLarge } from "../../components/ButtonLarge";

import { useTranslation } from "react-i18next";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Welcome() {
  const { t } = useTranslation();
  const usenavigation = useNavigation<ScreenNavigationProp>();
  return (
    <S.Wrapper>
      <MySVGImage />
      <S.Title>{t("message:welcome")}</S.Title>
      <S.SubTitle>{t("message:createAccount")}</S.SubTitle>
      <S.SubTitle>{t("message:toApp")}</S.SubTitle>
      <ButtonLarge
        onPress={() => {
          usenavigation.navigate("SignUp");
        }}
        text={t("message:gettingStarted")}
      />
      <S.Row>
        <S.Acoount>{t("message:alreadyHave")}</S.Acoount>
        <S.Button>
          <BorderlessButton
            onPress={() => {
              usenavigation.navigate("Login");
            }}
          >
            <S.ButtonText>{t("message:login")}</S.ButtonText>
          </BorderlessButton>
        </S.Button>
      </S.Row>
    </S.Wrapper>
  );
}
