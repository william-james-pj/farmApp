import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

import RaySvg from "../../../assets/svg/RayIcon.svg";

export const Wrapper = styled.View`
  width: 100%;
  height: 40px;

  align-items: center;
  flex-direction: row;
`;

export const DayName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  flex: 1;
`;

export const Grup = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const MaxValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  margin-right: 5px;
`;

export const MinValue = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Ray = styled(RaySvg).attrs((props) => ({}))``;
