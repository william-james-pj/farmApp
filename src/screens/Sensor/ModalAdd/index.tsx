import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { RadioButtonProps } from "../../../@types/radioButton";
import { ButtonSmall } from "../../../components/ButtonSmall";
import { ColorSelector } from "../../../components/ColorSelector";

import { TextInput } from "../../../components/TextInput";
import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";

import * as S from "./styles";

const colorButtonsData = [
  {
    id: "1",
    value: "#B97171",
    selected: true,
  },
  {
    id: "2",
    value: "#84B971",
  },
  {
    id: "3",
    value: "#71B9A8",
  },
  {
    id: "4",
    value: "#9571B9",
  },
  {
    id: "5",
    value: "#7185B9",
  },
  {
    id: "6",
    value: "#B771B9",
  },
  {
    id: "7",
    value: "#AFB971",
  },
  {
    id: "8",
    value: "#B9AD71",
  },
];

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
              <RectButton>
                <S.TextCancel>Cancel</S.TextCancel>
              </RectButton>
            </S.Button>
            <ButtonSmall text="Add" onPress={() => {}} />
          </S.Footer>
        </S.Modal>
      </S.Wrapper>
    </Modal>
  );
}
