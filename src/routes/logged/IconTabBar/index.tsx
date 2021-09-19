import React from "react";

import HomeSVG from "../../../assets/svg/Home.svg";
import SensorSVG from "../../../assets/svg/Sensor.svg";

import { useTheme } from "styled-components";

import * as S from "./styles";

interface IconTabBarProps {
  focused: boolean;
  icon: "Home" | "Sensor";
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  const theme = useTheme();

  return (
    <S.Icon active={focused}>
      {icon === "Home" ? (
        <HomeSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : (
        <SensorSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      )}
    </S.Icon>
  );
}
