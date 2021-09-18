import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import MySVGImage from "../../assets/svg/Track.svg";

import { ButtonLarge } from "../../components/ButtonLarge";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Welcome() {
  const usenavigation = useNavigation<ScreenNavigationProp>();
  return (
    <S.Wrapper>
      <MySVGImage />
      <S.Title>Welcome</S.Title>
      <S.SubTitle>Create an account and get access</S.SubTitle>
      <S.SubTitle>to app functions</S.SubTitle>
      <ButtonLarge
        onPress={() => {
          usenavigation.navigate("SignUp");
        }}
        text={"Getting Started"}
      />
      <S.Row>
        <S.Acoount>Already have an acoount ?</S.Acoount>
        <S.Button>
          <BorderlessButton
            onPress={() => {
              usenavigation.navigate("Login");
            }}
          >
            <S.ButtonText>log in</S.ButtonText>
          </BorderlessButton>
        </S.Button>
      </S.Row>
    </S.Wrapper>
  );
}
