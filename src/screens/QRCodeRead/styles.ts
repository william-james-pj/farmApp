import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import BarcodeMask from "react-native-barcode-mask";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight() + "px"};
`;

export const Title = styled.Text`
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
  margin: 20px 0 0px;
`;

export const SubTitle = styled.Text`
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  color: ${(props) => props.theme.colors.disabled};
  margin: 10px 0 0px;
`;

export const Context = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const BoxCode = styled.View`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const Mask = styled(BarcodeMask).attrs((props) => ({
  edgeColor: props.theme.colors.primary,
}))``;
