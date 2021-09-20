import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useTheme } from "styled-components";

import WindSvg from "../../assets/svg/Wind.svg";
import CloudySvg from "../../assets/svg/Cloudy.svg";

import { Header } from "../../components/Header";
import { SensorBox } from "./SensorBox";
import { RootStackParamListLogged } from "../../@types/types";

type HomeProps = DrawerScreenProps<RootStackParamListLogged, "Home">;

import * as S from "./styles";

export function Home({ navigation }: HomeProps) {
  const theme = useTheme();
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.TextContainer>
          <S.Text>Welcome</S.Text>
          <S.FarmName>Farm Name</S.FarmName>
        </S.TextContainer>
        <S.WeatherContainer>
          <S.Box>
            <S.WeatherTextContainer>
              <S.WeatherText>Monday, June 21</S.WeatherText>
              <S.WeatherText>São Roque</S.WeatherText>
            </S.WeatherTextContainer>
            <S.ForecastBox>
              <S.BallContainer>
                <S.Ball />
              </S.BallContainer>
              <S.ForecastItem>
                <CloudySvg fill={theme.colors.text} />
                <S.ForecastTextContainer>
                  <S.ForecastName>Cloudy</S.ForecastName>
                  <S.ForecastValue>32°C</S.ForecastValue>
                </S.ForecastTextContainer>
              </S.ForecastItem>
              <S.ForecastItem>
                <WindSvg fill={theme.colors.text} />
                <S.ForecastTextContainer>
                  <S.ForecastName>Wind</S.ForecastName>
                  <S.ForecastValue>32Km/h</S.ForecastValue>
                </S.ForecastTextContainer>
              </S.ForecastItem>
            </S.ForecastBox>
          </S.Box>
        </S.WeatherContainer>
        <S.TextContainer>
          <S.Text>Average of sensors</S.Text>
        </S.TextContainer>
        <S.SensorsContainer>
          <S.Row>
            <SensorBox sensorType={"Temp"} sensorValue={"32°C"} icon="Temp" />
            <SensorBox sensorType={"Wind"} sensorValue={"32km/h"} icon="Wind" />
          </S.Row>
          <S.Row>
            <SensorBox
              sensorType={"Humidity"}
              sensorValue={"80%"}
              icon="Humidity"
            />
            <SensorBox
              sensorType={"Soil Moisture"}
              sensorValue={"81%"}
              icon="Soil"
            />
          </S.Row>
        </S.SensorsContainer>
      </S.Wrapper>
    </>
  );
}
