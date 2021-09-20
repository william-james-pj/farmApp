import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

type SquareProps = {
  color: string;
};

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 55px;

  align-items: center;
  justify-content: center;
`;

export const ShadowView = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 95%;
  height: 45px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Square = styled.View<SquareProps>`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 20px;
`;

export const SensorName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;
