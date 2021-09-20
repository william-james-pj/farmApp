import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import BarMenu from "../../assets/svg/BarMenu.svg";

import * as S from "./styles";

interface HeaderProps {
  openDrawer?: () => void;
}

export function Header({ openDrawer = () => {} }: HeaderProps) {
  const theme = useTheme();

  function openMenu() {
    openDrawer();
  }

  return (
    <S.ViewContainer>
      <S.ButtonContainer>
        <RectButton onPress={openMenu} style={{ padding: 5, zIndex: 5 }}>
          <BarMenu fill={theme.colors.text} />
        </RectButton>
      </S.ButtonContainer>
      <S.Title>Farm App</S.Title>
    </S.ViewContainer>
  );
}
