import React from "react";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Header } from "../../components/Header";
import { RootStackParamListLogged } from "../../@types/types";

type HomeProps = DrawerScreenProps<RootStackParamListLogged, "Home">;

import * as S from "./styles";

export function Home({ navigation }: HomeProps) {
  return (
    <>
      <Header openDrawer={navigation.openDrawer} />
      <S.Wrapper>
        <S.Title>Home</S.Title>
      </S.Wrapper>
    </>
  );
}
