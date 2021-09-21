import React from "react";
import Modal from "react-native-modal";
import { SensorItemType } from "../../../@types/types";

import * as S from "./styles";

type ModalInfoProps = {
  isModalVisible: boolean;
  setModalVisible: () => void;
  sensor: SensorItemType;
};

export function ModalInfo({
  isModalVisible,
  setModalVisible,
  sensor,
}: ModalInfoProps) {
  const toggleModal = () => {
    setModalVisible();
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => toggleModal()}
      useNativeDriverForBackdrop
      swipeDirection={"down"}
      onSwipeComplete={() => toggleModal()}
    >
      <S.Wrapper style={{ flex: 1 }}>
        <S.ModalContainer>
          <S.RowCenter>
            <S.Square></S.Square>
          </S.RowCenter>
          <S.SensorName>{sensor.name}</S.SensorName>
          <S.Row>
            <S.ForecastItem>
              <S.Temp />
              <S.ForecastTextContainer>
                <S.ForecastName>Temp</S.ForecastName>
                <S.ForecastValue>32°C</S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Wind />
              <S.ForecastTextContainer>
                <S.ForecastName>Wind</S.ForecastName>
                <S.ForecastValue>32km/h</S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Lighting />
              <S.ForecastTextContainer>
                <S.ForecastName>Lighting</S.ForecastName>
                <S.ForecastValue>32.000lx</S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Humidity />
              <S.ForecastTextContainer>
                <S.ForecastName>Humidity</S.ForecastName>
                <S.ForecastValue>81%</S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Soil />
              <S.ForecastTextContainer>
                <S.ForecastName>Soil Moisture</S.ForecastName>
                <S.ForecastValue>81%</S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>
          </S.Row>
        </S.ModalContainer>
      </S.Wrapper>
    </Modal>
  );
}
