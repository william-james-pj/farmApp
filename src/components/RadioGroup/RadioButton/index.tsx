import React from "react";
import { PixelRatio } from "react-native";

import { RadioButtonProps } from "../../../@types/radioButton";

import * as S from "./styles";

export function RadioButton({
  id,
  label,
  selected = false,
  size = 24,
  disabled = false,
  onPress,
}: RadioButtonProps) {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <S.Wrapper opacity={disabled} onPress={handlePress}>
      <S.Radio
        width={sizeFull}
        height={sizeFull}
        borderRadius={sizeFull}
        borderWidth={borderWidth}
        selected={selected}
      >
        {selected && (
          <S.Ball width={sizeHalf} height={sizeHalf} borderRadius={sizeHalf} />
        )}
      </S.Radio>
      {Boolean(label) && <S.Label>{label}</S.Label>}
    </S.Wrapper>
  );
}
