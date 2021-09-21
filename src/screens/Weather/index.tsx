import React from "react";

import { Header } from "../../components/Header";
import { WeatherItem } from "./WeatherItem";
import { WeatherItemType, WeatherSliderItemType } from "../../@types/types";
import { WeatherSliderItem } from "./WeatherSliderItem";

import * as S from "./styles";

const data: WeatherItemType[] = [
  {
    id: "1",
    day: "Tuesday",
    maxValue: "25°",
    minValue: "18°",
  },
  {
    id: "2",
    day: "Wednesday",
    maxValue: "28°",
    minValue: "22°",
  },
  {
    id: "3",
    day: "Thursday",
    maxValue: "23°",
    minValue: "18°",
  },
  {
    id: "4",
    day: "Friday",
    maxValue: "23°",
    minValue: "17°",
  },
  {
    id: "5",
    day: "Saturday",
    maxValue: "29°",
    minValue: "19°",
  },
];

const dataHorizontal: WeatherSliderItemType[] = [
  {
    id: "1",
    clock: "9:00 AM",
    value: "32°",
  },
  {
    id: "2",
    clock: "12:00 PM",
    value: "33°",
  },
  {
    id: "3",
    clock: "3:00 PM",
    value: "30°",
  },
  {
    id: "4",
    clock: "6:00 PM",
    value: "29°",
  },
  {
    id: "5",
    clock: "9:00 PM",
    value: "27°",
  },
];

export function Weather() {
  const renderRows = ({ item }: { item: WeatherItemType }) => {
    return <WeatherItem item={item} />;
  };

  const renderRowsHorizontal = ({ item }: { item: WeatherSliderItemType }) => {
    return <WeatherSliderItem item={item} />;
  };

  return (
    <>
      <Header back={true} title={"City"} />
      <S.Wrapper>
        <S.Header>
          <S.CloudyContainer>
            <S.Text>Cloudy</S.Text>
          </S.CloudyContainer>
          <S.TempHeader>32°</S.TempHeader>
          <S.Row>
            <S.Grup>
              <S.Humidity />
              <S.GrupValue>81%</S.GrupValue>
            </S.Grup>
            <S.Grup>
              <S.Wind />
              <S.GrupValue>32km/h</S.GrupValue>
            </S.Grup>
          </S.Row>
        </S.Header>
        <S.TextPrimary>Today</S.TextPrimary>
        <S.FlatListSlide
          horizontal={true}
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={dataHorizontal}
          renderItem={renderRowsHorizontal}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <S.SeparatorHorizontal></S.SeparatorHorizontal>
          )}
          ListFooterComponent={() => (
            <S.FooterViewHorizontal></S.FooterViewHorizontal>
          )}
        />
        <S.TextPrimary>Next days</S.TextPrimary>
        <S.FlatListS
          removeClippedSubviews={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={data}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
        />
      </S.Wrapper>
    </>
  );
}
