import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import BarMenuSvg from "../../assets/svg/BarMenu.svg";
import GoBackSvg from "../../assets/svg/GoBack.svg";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const ViewContainer = styled.View`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.colors.background};
  padding: 0 20px;
  padding-top: ${getStatusBarHeight() + "px"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.View`
  height: 100%;
  padding-top: ${getStatusBarHeight() + "px"};
  left: 20px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const BarMenu = styled(BarMenuSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;

export const GoBack = styled(GoBackSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;
