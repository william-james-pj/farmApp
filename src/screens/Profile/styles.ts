import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { FontAwesome5 } from "@expo/vector-icons";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
`;

export const Row = styled.View`
  width: 100%;
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

export const TextName = styled.Text`
  margin-left: 10px;
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
`;

export const TextPrimary = styled.Text`
  width: 100%;
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
  margin: 20px 0 10px;
`;

export const TextSecond = styled.Text`
  width: 100%;
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
  margin: 20px 0 10px;
`;

export const Content = styled.View`
  flex: 8;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Button = styled.View`
  margin-right: 16px;
  justify-content: center;
`;

export const TextCancel = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;
