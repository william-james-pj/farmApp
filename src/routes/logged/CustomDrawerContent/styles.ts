import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../../styles/fonts";

import { FontAwesome5 } from "@expo/vector-icons";
import CogSvg from "../../../assets/svg/cog.svg";
import InfoSvg from "../../../assets/svg/InfoSvg.svg";

type LabelProps = {
  focused: boolean;
};

export const ViewContainer = styled.View`
  padding-top: ${getStatusBarHeight() + "px"};
  background: ${(props) => props.theme.colors.background};
`;

export const ViewHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewAvatar = styled.View`
  width: 55px;
  height: 55px;
  background: gray;
  border-radius: 50px;
  overflow: hidden;

  align-items: center;
  justify-content: flex-end;
`;

export const FontAwesome = styled(FontAwesome5)`
  color: ${(props) => props.theme.colors.background};
  bottom: -5px;
`;

export const IconLabel = styled(FontAwesome5)<LabelProps>`
  color: ${(props) =>
    props.focused ? props.theme.colors.text : props.theme.colors.disabled};
  margin-left: 10px;
`;

export const TextLabel = styled(FontAwesome5)<LabelProps>`
  color: ${(props) =>
    props.focused ? props.theme.colors.text : props.theme.colors.disabled};
  font-family: ${fonts.type.text700};
`;

export const ViewContent = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ViewFooter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0 30px;
`;

export const ViewButtonFooter = styled.View`
  width: 60%;
  height: 45px;
  overflow: hidden;
  border-radius: 10px;
`;

export const TextLogOut = styled.Text`
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.disabled};
`;

export const TextName = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  margin-left: 10px;
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};

  width: 60%;
  overflow: hidden;
`;

export const Cog = styled(CogSvg).attrs((props) => ({
  fill: props.focused ? props.theme.colors.text : props.theme.colors.disabled,
  width: 20,
  height: 20,
}))`
  margin-left: 10px;
`;

export const Info = styled(InfoSvg).attrs((props) => ({
  fill: props.focused ? props.theme.colors.text : props.theme.colors.disabled,
  width: 20,
  height: 20,
}))`
  margin-left: 10px;
`;
