import React, { useState } from "react";

import Modal from "react-native-modal";
import { RadioButtonProps } from "../../../@types/radioButton";
import { ColorSelector } from "../../../components/ColorSelector";

import { TextInput } from "../../../components/TextInput";
import { colorButtonsData } from "../../../data/colorButtonsData";
import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";
import { useSensor } from "../../../hooks/useSensor";

import * as S from "./styles";

export function ModalAdd() {
  const { addSensor } = useSensor();
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

  const addItem = () => {
    if (!sensorName.trim().length) return;

    let color = "";
    colorButtons.forEach((element) => {
      if (element.selected) color = element.value || "";
    });

    addSensor({
      name: sensorName,
      color,
    });

    closeModal();
    setsensorName("");
    setColorButtons(colorButtonsData);
  };

  return (
    <Modal isVisible={isOpen} onBackdropPress={() => closeModal()}>
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
            <S.ButtonAdd onPress={addItem}>
              <S.TextAdd>Save</S.TextAdd>
            </S.ButtonAdd>
          </S.Footer>
        </S.Modal>
      </S.Wrapper>
    </Modal>
  );
}
