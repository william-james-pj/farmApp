import React from "react";
import { WeatherSliderItemType } from "../../../@types/types";

import * as S from "./styles";

export function WeatherSliderItem({ item }: { item: WeatherSliderItemType }) {
  return (
    <S.Wrapper>
      <S.Clock>{item.clock}</S.Clock>
      <S.Sunny />
      <S.Temp>{item.value}</S.Temp>
    </S.Wrapper>
  );
}
