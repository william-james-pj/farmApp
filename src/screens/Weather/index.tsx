import React, { useEffect } from "react";

import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { WeatherItem } from "./WeatherItem";
import { WeatherSliderItem } from "./WeatherSliderItem";
import { howLongAgo } from "../../utils/howLongAgo";

import { useAuth } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../hooks/useWeather";
import { useSetting } from "../../hooks/useSetting";

import { DailyWeatherType, HourlyWeatherType } from "../../@types/types";

import * as S from "./styles";

export function Weather() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { objSetting } = useSetting();
  const {
    getAll,
    loadingWeather,
    currentWeather,
    hourlyWeather,
    dailyWeather,
  } = useWeather();

  const renderRows = ({ item }: { item: DailyWeatherType }) => {
    return <WeatherItem item={item} />;
  };

  const renderRowsHorizontal = ({ item }: { item: HourlyWeatherType }) => {
    return <WeatherSliderItem item={item} />;
  };

  useEffect(() => {
    if (howLongAgo(hourlyWeather[0]?.dt)) {
      getAll(
        {
          latitude: user?.geometry?.latitude || "",
          longitude: user?.geometry?.longitude || "",
        },
        objSetting.tempUnit
      );
    }
  }, []);

  if (loadingWeather) {
    return <Loading />;
  }

  return (
    <>
      <Header back={true} title={user?.location?.city} />
      <S.Wrapper>
        <S.Header>
          <S.CloudyContainer>
            <S.Text>{currentWeather.weather?.main}</S.Text>
          </S.CloudyContainer>
          <S.TempHeader>{currentWeather.temp}</S.TempHeader>
          <S.Row>
            <S.Grup>
              <S.Humidity />
              <S.GrupValue>{`${currentWeather.humidity} %`}</S.GrupValue>
            </S.Grup>
            <S.Grup>
              <S.Wind />
              <S.GrupValue>{currentWeather.windSpeed}</S.GrupValue>
            </S.Grup>
          </S.Row>
        </S.Header>
        <S.TextPrimary>{t("message:today")}</S.TextPrimary>
        <S.FlatListSlide
          horizontal={true}
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={hourlyWeather}
          renderItem={renderRowsHorizontal}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <S.SeparatorHorizontal></S.SeparatorHorizontal>
          )}
          ListFooterComponent={() => (
            <S.FooterViewHorizontal></S.FooterViewHorizontal>
          )}
        />
        <S.TextPrimary>{t("message:nextDays")}</S.TextPrimary>
        <S.FlatListS
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={dailyWeather}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
        />
      </S.Wrapper>
    </>
  );
}
