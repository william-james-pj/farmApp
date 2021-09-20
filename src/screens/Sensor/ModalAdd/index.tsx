import React, { useState } from "react";

import Modal from "react-native-modal";
import { RadioButtonProps } from "../../../@types/radioButton";
import { ButtonSmall } from "../../../components/ButtonSmall";
import { ColorSelector } from "../../../components/ColorSelector";

import { TextInput } from "../../../components/TextInput";
import { colorButtonsData } from "../../../data/colorButtonsData";
import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";

import * as S from "./styles";

export function ModalAdd() {
  const { isOpen, openModal } = useOpenModalAdd();
  const [sensorName, setsensorName] = useState("");
  const [colorButtons, setColorButtons] =
    useState<RadioButtonProps[]>(colorButtonsData);

  function onPressColorButton(colorButtonsArray: RadioButtonProps[]) {
    setColorButtons(colorButtonsArray);
  }

  const closeModal = () => {
    openModal(false);
  };

  return (
    <Modal isVisible={isOpen}>
      <S.Wrapper>
        <S.Modal>
          <S.Title>Add sensor</S.Title>
          <TextInput
            placeholder="Sensor name"
            onChangeText={setsensorName}
            value={sensorName}
            widhtBox="100%"
          />
          <S.Label>Color</S.Label>
          <S.RowColor>
            <ColorSelector
              colorButtons={colorButtons}
              onPress={onPressColorButton}
            />
          </S.RowColor>
          <S.Footer>
            <S.Button onPress={closeModal}>
              <S.TextCancel>Cancel</S.TextCancel>
            </S.Button>
            <ButtonSmall text="Add" onPress={() => {}} />
          </S.Footer>
        </S.Modal>
      </S.Wrapper>
    </Modal>
  );
}