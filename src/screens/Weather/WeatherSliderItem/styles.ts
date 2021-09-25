import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

import SunnySvg from "../../../assets/svg/SunnyIcon.svg";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.primaryOpacity};
  width: 80px;
  height: 100px;
  padding: 5px;
  border-radius: 10px;

  align-items: center;
  flex-direction: column;
`;

export const Clock = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const Temp = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.md};
  font-family: ${fonts.type.text700};
`;

export const Sunny = styled(SunnySvg).attrs((props) => ({
  fill: props.theme.colors.card,
}))`
  flex: 1;
`;