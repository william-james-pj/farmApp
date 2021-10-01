import React from "react";

import * as S from "./styles";

type WeatherIconsProps = {
  iconId: string;
};

export function WeatherIcons({ iconId }: WeatherIconsProps) {
  if (iconId === "01d") return <S.ClearDay />;
  else if (iconId === "01n") return <S.ClearNight />;
  else if (iconId === "02d") return <S.FewCloudsDay />;
  else if (iconId === "02n") return <S.FewCloudsNight />;
  else if (iconId === "03d") return <S.ScatteredCloudsDay />;
  else if (iconId === "03n") return <S.ScatteredCloudsNight />;
  else if (iconId === "04d") return <S.BrokenClouds />;
  else if (iconId === "09d") return <S.ShowerRain />;
  else if (iconId === "10d") return <S.RainDay />;
  else if (iconId === "10n") return <S.RainNight />;
  else if (iconId === "11d") return <S.ThunderstormDay />;
  else if (iconId === "11n") return <S.ThunderstormDay />;
  else if (iconId === "13d") return <S.Snow />;
  else return <S.ClearDay />;
}
