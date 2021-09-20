import React from "react";
import { PixelRatio } from "react-native";

import CheckSvg from "../../../assets/svg/Check.svg";

import { useTheme } from "styled-components";
import { RadioButtonProps } from "../../../@types/radioButton";

import * as S from "./styles";

export function ColorButton({
  id,
  value,
  selected = false,
  disabled = false,
  onPress,
}: RadioButtonProps) {
  const theme = useTheme();
  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <S.Wrapper colorSquare={value} onPress={handlePress}>
      {selected && <CheckSvg fill={theme.colors.card} />}
    </S.Wrapper>
  );
}
