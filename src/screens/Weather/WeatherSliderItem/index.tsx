import React from "react";

import { WeatherIcons } from "../../../components/WeatherIcons";

import { HourlyWeatherType } from "../../../@types/types";

import * as S from "./styles";

export function WeatherSliderItem({ item }: { item: HourlyWeatherType }) {
  return (
    <S.Wrapper>
      <S.Clock>{item.time}</S.Clock>
      <S.IconContainer>
        <WeatherIcons iconId={item.icon || ""} />
      </S.IconContainer>
      <S.Temp>{item.temp}</S.Temp>
    </S.Wrapper>
  );
}
