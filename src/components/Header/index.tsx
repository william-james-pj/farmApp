import React from "react";

import { useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

interface HeaderProps {
  openDrawer?: () => void;
  title?: string;
  back?: boolean;
}

export function Header({
  openDrawer = () => {},
  title = "GrowTech",
  back = false,
}: HeaderProps) {
  const usenavigation = useNavigation();

  function openMenu() {
    openDrawer();
  }

  function clickGoBack() {
    usenavigation.goBack();
  }

  return (
    <S.ViewContainer>
      <S.ButtonContainer>
        <RectButton
          onPress={back ? clickGoBack : openMenu}
          style={{ padding: 5, zIndex: 5 }}
        >
          {back ? <S.GoBack /> : <S.BarMenu />}
        </RectButton>
      </S.ButtonContainer>
      <S.Title>{title}</S.Title>
    </S.ViewContainer>
  );
}
