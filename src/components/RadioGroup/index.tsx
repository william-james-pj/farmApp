import React, { useState } from "react";
import _ from "lodash";

import { RadioButton } from "./RadioButton";
import { RadioButtonProps } from "../../@types/radioButton";

import * as S from "./styles";

type RadioGroupProps = {
  layout?: "column" | "row";
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
};

export function RadioGroup({
  radioButtons,
  onPress,
  layout = "row",
}: RadioGroupProps) {
  const [radioButtonsLocal, setRadioButtonsLocal] =
    useState<RadioButtonProps[]>(radioButtons);

  if (!_.isEqual(radioButtons, radioButtonsLocal)) {
    setRadioButtonsLocal(radioButtons);
  }

  function handlePress(id: string) {
    for (const button of radioButtonsLocal) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  return (
    <S.Wrapper layout={layout}>
      {radioButtonsLocal.map((button) => (
        <RadioButton {...button} key={button.id} onPress={handlePress} />
      ))}
    </S.Wrapper>
  );
}
