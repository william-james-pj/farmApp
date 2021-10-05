import React from "react";
import { DailyWeatherType } from "../../../@types/types";
import { WeatherIcons } from "../../../components/WeatherIcons";

import { useTranslation } from "react-i18next";

import * as S from "./styles";

export function WeatherItem({ item }: { item: DailyWeatherType }) {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.DayName>
        {item.dtMill
          ? t("message:dateWeek", {
              date: new Date(item.dtMill || ""),
            })
          : ""}
      </S.DayName>
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
