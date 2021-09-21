import React from "react";
import { WeatherItemType } from "../../../@types/types";

import * as S from "./styles";

export function WeatherItem({ item }: { item: WeatherItemType }) {
  return (
    <S.Wrapper>
      <S.DayName>{item.day}</S.DayName>
      <S.Grup>
        <S.MaxValue>{item.maxValue}</S.MaxValue>
        <S.MinValue>{item.minValue}</S.MinValue>
      </S.Grup>
      <S.IconContainer>
        <S.Ray />
      </S.IconContainer>
    </S.Wrapper>
  );
}
