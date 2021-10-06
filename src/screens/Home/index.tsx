import React, { useState, useEffect } from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { WeatherIcons } from "../../components/WeatherIcons";
import { SensorBox } from "./SensorBox";
import { RootStackParamListLogged } from "../../@types/types";

import { useAuth } from "../../hooks/useAuth";
import { useSensor } from "../../hooks/useSensor";
import { useWeather } from "../../hooks/useWeather";
import { useTranslation } from "react-i18next";

type HomeProps = DrawerScreenProps<RootStackParamListLogged, "Home">;

import * as S from "./styles";

export function Home({ navigation }: HomeProps) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { sensorData } = useSensor();
  const { getCurrent, loadingWeather, currentWeather } = useWeather();

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

    return `${(values / leng).toFixed(0)}°C`;
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

  useEffect(() => {
    getCurrent(
      {
        latitude: user?.geometry?.latitude || "",
        longitude: user?.geometry?.longitude || "",
      },
      user?.config?.tempUnit || "celsius"
    );
  }, ["", user?.config?.tempUnit, user?.geometry]);

  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.TextContainer>
          <S.Text>{t("message:welcome")}</S.Text>
          <S.FarmName>{user?.farmName}</S.FarmName>
        </S.TextContainer>
        <S.WeatherContainer>
          <S.Box>
            <S.ButtonRect
              onPress={() => navigation.navigate("Weather")}
            ></S.ButtonRect>
            {loadingWeather ? (
              <Loading color="primary" />
            ) : (
              <>
                <S.WeatherTextContainer>
                  <S.WeatherText>
                    {currentWeather.dtMill
                      ? t("message:dateToday", {
                          date: new Date(currentWeather.dtMill || ""),
                        })
                      : ""}
                  </S.WeatherText>
                  <S.WeatherText>{user?.location?.city}</S.WeatherText>
                </S.WeatherTextContainer>
                <S.ForecastBox>
                  <S.BallContainer>
                    <S.Ball />
                  </S.BallContainer>
                  <S.ForecastItem>
                    <WeatherIcons iconId={currentWeather.weather?.icon || ""} />
                    <S.ForecastTextContainer>
                      <S.ForecastName>
                        {currentWeather.weather?.main}
                      </S.ForecastName>
                      <S.ForecastValue>{currentWeather.temp}</S.ForecastValue>
                    </S.ForecastTextContainer>
                  </S.ForecastItem>
                  <S.ForecastItem>
                    <S.Wind />
                    <S.ForecastTextContainer>
                      <S.ForecastName>{t("generic:wind")}</S.ForecastName>
                      <S.ForecastValue>
                        {currentWeather.windSpeed}
                      </S.ForecastValue>
                    </S.ForecastTextContainer>
                  </S.ForecastItem>
                </S.ForecastBox>
              </>
            )}
          </S.Box>
        </S.WeatherContainer>
        <S.TextContainer>
          <S.Text>{t("message:average")}</S.Text>
        </S.TextContainer>
        <S.SensorsContainer>
          <S.Row>
            <SensorBox
              sensorType={t("generic:temp")}
              sensorValue={tempAverage}
              icon="Temp"
            />
            <SensorBox
              sensorType={t("generic:wind")}
              sensorValue={windAverage}
              icon="Wind"
            />
          </S.Row>
          <S.Row>
            <SensorBox
              sensorType={t("generic:humidity")}
              sensorValue={humidityAverage}
              icon="Humidity"
            />
            <SensorBox
              sensorType={t("generic:soil")}
              sensorValue={soilAverage}
              icon="Soil"
            />
          </S.Row>
        </S.SensorsContainer>
      </S.Wrapper>
    </>
  );
}
