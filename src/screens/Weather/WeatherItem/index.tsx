import React from "react";
import { DailyWeatherType } from "../../../@types/types";
import { WeatherIcons } from "../../../components/WeatherIcons";

import * as S from "./styles";

export function WeatherItem({ item }: { item: DailyWeatherType }) {
  return (
    <S.Wrapper>
      <S.DayName>{item.date}</S.DayName>
      <S.Grup>
        <S.MaxValue>{item.maxValue}</S.MaxValue>
        <S.MinValue>{item.minValue}</S.MinValue>
      </S.Grup>
      <S.IconContainer>
        <WeatherIcons iconId={item.icon || ""} />
      </S.IconContainer>
    </S.Wrapper>
  );
}
