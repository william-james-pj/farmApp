import React, { useState } from "react";
import _ from "lodash";

import { ColorButton } from "./ColorButton";
import { RadioButtonProps } from "../../@types/radioButton";

import * as S from "./styles";

type ColorSelectorProps = {
  layout?: "column" | "row";
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  colorButtons: RadioButtonProps[];
};

export function ColorSelector({
  colorButtons,
  onPress,
  layout = "row",
}: ColorSelectorProps) {
  const [colorButtonsLocal, setColorButtonsLocal] =
    useState<RadioButtonProps[]>(colorButtons);

  if (!_.isEqual(colorButtons, colorButtonsLocal)) {
    setColorButtonsLocal(colorButtons);
  }

  function handlePress(id: string) {
    for (const button of colorButtonsLocal) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setColorButtonsLocal([...colorButtonsLocal]);
    if (onPress) {
      onPress(colorButtonsLocal);
    }
  }

  return (
    <S.Wrapper layout={layout}>
      {colorButtonsLocal.map((button) => (
        <ColorButton {...button} key={button.id} onPress={handlePress} />
      ))}
    </S.Wrapper>
  );
}
