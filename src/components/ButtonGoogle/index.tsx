import React from "react";
import { RectButton } from "react-native-gesture-handler";

import Google from "../../assets/svg/google-brands.svg";

import * as S from "./styles";

type ButtonGoogleProps = {
  onPress: () => void;
};

export function ButtonGoogle({ onPress }: ButtonGoogleProps) {
  return (
    <S.Wrapper>
      <RectButton onPress={onPress}>
        <S.Button>
          <Google />
        </S.Button>
      </RectButton>
    </S.Wrapper>
  );
}
