import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ButtonLargeProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export function ButtonSmall({
  onPress,
  text,
  disabled = false,
}: ButtonLargeProps) {
  return (
    <S.Wrapper disabled={disabled}>
      <RectButton onPress={!disabled ? onPress : () => {}}>
        <S.Button>
          <S.Text>{text}</S.Text>
        </S.Button>
      </RectButton>
    </S.Wrapper>
  );
}
