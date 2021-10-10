import React from "react";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
                <S.ForecastName>{t("generic:temp")}</S.ForecastName>
                <S.ForecastValue>
                  {sensor.values?.temp ? `${sensor.values?.temp || ""}°C` : ""}
                </S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Wind />
              <S.ForecastTextContainer>
                <S.ForecastName>{t("generic:wind")}</S.ForecastName>
                <S.ForecastValue>
                  {sensor.values?.wind
                    ? `${sensor.values?.wind || ""}km/h`
                    : ""}
                </S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Lighting />
              <S.ForecastTextContainer>
                <S.ForecastName>{t("generic:lighting")}</S.ForecastName>
                <S.ForecastValue>
                  {sensor.values?.lighting
                    ? `${sensor.values?.lighting || ""}lx`
                    : ""}
                </S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Humidity />
              <S.ForecastTextContainer>
                <S.ForecastName>{t("generic:humidity")}</S.ForecastName>
                <S.ForecastValue>
                  {sensor.values?.humidity
                    ? `${sensor.values?.humidity || ""}%`
                    : ""}
                </S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>

            <S.ForecastItem>
              <S.Soil />
              <S.ForecastTextContainer>
                <S.ForecastName>{t("generic:soil")}</S.ForecastName>
                <S.ForecastValue>
                  {sensor.values?.soil ? `${sensor.values?.soil || ""}%` : ""}
                </S.ForecastValue>
              </S.ForecastTextContainer>
            </S.ForecastItem>
          </S.Row>
        </S.ModalContainer>
      </S.Wrapper>
    </Modal>
  );
}
