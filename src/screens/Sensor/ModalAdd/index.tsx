import React, { useState } from "react";

import Modal from "react-native-modal";
import { RadioButtonProps } from "../../../@types/radioButton";
import { ColorSelector } from "../../../components/ColorSelector";

import { TextInput } from "../../../components/TextInput";
import { colorButtonsData } from "../../../data/colorButtonsData";
import { useAuth } from "../../../hooks/useAuth";
import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";
import { useSensor } from "../../../hooks/useSensor";
import { useTranslation } from "react-i18next";

import * as S from "./styles";

export function ModalAdd() {
  const { t } = useTranslation();
  const { addSensor } = useSensor();
  const { isOpen, openModal } = useOpenModalAdd();
  const { user } = useAuth();

  const [sensorName, setsensorName] = useState("");
  const [colorButtons, setColorButtons] =
    useState<RadioButtonProps[]>(colorButtonsData);

  function onPressColorButton(colorButtonsArray: RadioButtonProps[]) {
    setColorButtons(colorButtonsArray);
  }

  const closeModal = () => {
    openModal(false);
  };

  const addItem = async () => {
    if (!sensorName.trim().length) return;

    let color = "";
    colorButtons.forEach((element) => {
      if (element.selected) color = element.value || "";
    });

    await addSensor(
      {
        name: sensorName,
        color,
      },
      user?.id || ""
    );

    closeModal();
    setsensorName("");
    setColorButtons(colorButtonsData);
  };

  return (
    <Modal isVisible={isOpen} onBackdropPress={() => closeModal()}>
      <S.Wrapper>
        <S.Modal>
          <S.Title>{t("message:addSenso")}</S.Title>
          <TextInput
            placeholder={t("generic:sensorName")}
            onChangeText={setsensorName}
            value={sensorName}
            widhtBox="100%"
          />
          <S.Label>{t("message:color")}</S.Label>
          <S.RowColor>
            <ColorSelector
              colorButtons={colorButtons}
              onPress={onPressColorButton}
            />
          </S.RowColor>
          <S.Footer>
            <S.Button onPress={closeModal}>
              <S.TextCancel>{t("generic:cancel")}</S.TextCancel>
            </S.Button>
            <S.ButtonAdd onPress={addItem}>
              <S.TextAdd>{t("generic:save")}</S.TextAdd>
            </S.ButtonAdd>
          </S.Footer>
        </S.Modal>
      </S.Wrapper>
    </Modal>
  );
}
