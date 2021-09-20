import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

import HumiditySvg from "../../../assets/svg/Humidity.svg";
import SoilSvg from "../../../assets/svg/Soil.svg";
import TempSvg from "../../../assets/svg/Temp.svg";
import WindSvg from "../../../assets/svg/Wind.svg";

import * as S from "./styles";

type SensorBoxProps = {
  sensorType: string;
  sensorValue: String;
  icon: "Humidity" | "Soil" | "Temp" | "Wind";
};

export function SensorBox({ sensorType, sensorValue, icon }: SensorBoxProps) {
  const theme = useTheme();

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
          <HumiditySvg fill={theme.colors.text} />
        ) : icon === "Soil" ? (
          <SoilSvg fill={theme.colors.text} />
        ) : icon === "Temp" ? (
          <TempSvg fill={theme.colors.text} />
        ) : (
          <WindSvg fill={theme.colors.text} />
        )}
      </S.RowIcon>
      <S.RowText>
        <S.SensorName>{sensorType}</S.SensorName>
        <S.SensorValue>{sensorValue}</S.SensorValue>
      </S.RowText>
    </S.Wrapper>
  );
}
