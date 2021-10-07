import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

import ArrowRightSvg from "../../../assets/svg/ArrowRight.svg";

export const Wrapper = styled.View`
  width: 95%;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

export const Background = styled.View`
  background: ${(props) => props.theme.colors.primary};
  opacity: 0.6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Container = styled.View`
  flex: 1;
  padding: 15px 20px;
`;

export const Title = styled.Text`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const Context = styled.View`
  flex: 1;
  padding-top: 5px;
`;

export const TextContext = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  opacity: 0.8;
  text-align: justify;
  line-height: 18px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const TextFooter = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};

  margin-right: 10px;
`;

export const ArrowRight = styled(ArrowRightSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 15,
  height: 15,
}))``;
