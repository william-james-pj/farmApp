import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 45%;
  height: 75%;
  padding: 20px;

  border-top-left-radius: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 10px;
`;

export const RowIcon = styled.View`
  flex: 1;
`;

export const RowText = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const SensorName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const SensorValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;
