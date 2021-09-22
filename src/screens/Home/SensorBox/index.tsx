import React from "react";
import { StyleSheet } from "react-native";

import * as S from "./styles";

type SensorBoxProps = {
  sensorType: string;
  sensorValue: String;
  icon: "Humidity" | "Soil" | "Temp" | "Wind";
};

export function SensorBox({ sensorType, sensorValue, icon }: SensorBoxProps) {
  const styles = StyleSheet.create({
    box: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
  });

  return (
    <S.Wrapper style={styles.box}>
      <S.RowIcon>
        {icon === "Humidity" ? (
          <S.Humidity />
        ) : icon === "Soil" ? (
          <S.Soil />
        ) : icon === "Temp" ? (
          <S.Temp />
        ) : (
          <S.Wind />
        )}
      </S.RowIcon>
      <S.RowText>
        <S.SensorName>{sensorType}</S.SensorName>
        <S.SensorValue>{sensorValue}</S.SensorValue>
      </S.RowText>
    </S.Wrapper>
  );
}
