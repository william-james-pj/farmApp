import React, { useState, useEffect } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { SensorBox } from "./SensorBox";
import { RootStackParamListLogged } from "../../@types/types";

import { useAuth } from "../../hooks/useAuth";
import { useSensor } from "../../hooks/useSensor";

type HomeProps = DrawerScreenProps<RootStackParamListLogged, "Home">;

import * as S from "./styles";

export function Home({ navigation }: HomeProps) {
  const { user } = useAuth();
  const { sensorData } = useSensor();

  const [tempAverage, setTempAverage] = useState("");
  const [windAverage, setWindAverage] = useState("");
  const [humidityAverage, setHumidityAverage] = useState("");
  const [soilAverage, setSoilAverage] = useState("");

  const getAverageTemp = () => {
    let values = 0;
    let leng = 0;

    sensorData.forEach((item) => {
      if (item.values.temp) {
        values += parseFloat(item.values.temp);
        leng++;
      }
    });

    if (!(values / leng)) return "No sensor";

    return `${(values / leng).toFixed(1)}°C`;
  };

  const getAverageWind = () => {
    let values = 0;
    let leng = 0;

    sensorData.forEach((item) => {
      if (item.values.wind) {
        values += parseFloat(item.values.wind);
        leng++;
      }
    });

    if (!(values / leng)) return "No sensor";

    return `${(values / leng).toFixed(0)}km/h`;
  };

  const getAverageHumidity = () => {
    let values = 0;
    let leng = 0;

    sensorData.forEach((item) => {
      if (item.values.humidity) {
        values += parseFloat(item.values.humidity);
        leng++;
      }
    });

    if (!(values / leng)) return "No sensor";

    return `${(values / leng).toFixed(0)}%`;
  };

  const getAverageSoil = () => {
    let values = 0;
    let leng = 0;

    sensorData.forEach((item) => {
      if (item.values.soil) {
        values += parseFloat(item.values.soil);
        leng++;
      }
    });

    if (!(values / leng)) return "No sensor";

    return `${(values / leng).toFixed(0)}%`;
  };

  useEffect(() => {
    setTempAverage(getAverageTemp());
    setWindAverage(getAverageWind());
    setHumidityAverage(getAverageHumidity());
    setSoilAverage(getAverageSoil());
  }, [sensorData]);

  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.TextContainer>
          <S.Text>Welcome</S.Text>
          <S.FarmName>{user?.farmName}</S.FarmName>
        </S.TextContainer>
        <S.WeatherContainer>
          <S.Box>
            <S.ButtonRect
              onPress={() => navigation.navigate("Weather")}
            ></S.ButtonRect>
            <S.WeatherTextContainer>
              <S.WeatherText>Monday, June 21</S.WeatherText>
              <S.WeatherText>São Roque</S.WeatherText>
            </S.WeatherTextContainer>
            <S.ForecastBox>
              <S.BallContainer>
                <S.Ball />
              </S.BallContainer>
              <S.ForecastItem>
                <S.Cloudy />
                <S.ForecastTextContainer>
                  <S.ForecastName>Cloudy</S.ForecastName>
                  <S.ForecastValue>32°C</S.ForecastValue>
                </S.ForecastTextContainer>
              </S.ForecastItem>
              <S.ForecastItem>
                <S.Wind />
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
            <SensorBox
              sensorType={"Temp"}
              sensorValue={tempAverage}
              icon="Temp"
            />
            <SensorBox
              sensorType={"Wind"}
              sensorValue={windAverage}
              icon="Wind"
            />
          </S.Row>
          <S.Row>
            <SensorBox
              sensorType={"Humidity"}
              sensorValue={humidityAverage}
              icon="Humidity"
            />
            <SensorBox
              sensorType={"Soil Moisture"}
              sensorValue={soilAverage}
              icon="Soil"
            />
          </S.Row>
        </S.SensorsContainer>
      </S.Wrapper>
    </>
  );
}
