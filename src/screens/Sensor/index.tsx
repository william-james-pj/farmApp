import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { RootStackParamListLogged } from "../../@types/types";

type SensorProps = DrawerScreenProps<RootStackParamListLogged, "Sensor">;

import * as S from "./styles";

export function Sensor({ navigation }: SensorProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.Title>Sensor</S.Title>
      </S.Wrapper>
    </>
  );
}
