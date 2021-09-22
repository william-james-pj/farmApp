import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { RectButton } from "react-native-gesture-handler";

import WindSvg from "../../assets/svg/Wind.svg";
import CloudySvg from "../../assets/svg/Cloudy.svg";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text400};
`;

export const FarmName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.md};
  font-family: ${fonts.type.text700};
`;

export const WeatherContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const Box = styled.View`
  width: 100%;
  height: 130px;
  padding: 10px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  position: relative;
`;

export const ButtonRect = styled(RectButton)`
  position: absolute;
  flex: 1;
  z-index: 99;
  width: 110%;
  height: 120%;
  top: 0;
  left: 0;
`;

export const WeatherTextContainer = styled.View`
  width: 100%;
  padding: 0 0 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const WeatherText = styled.Text`
  color: ${(props) => props.theme.colors.card};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const ForecastBox = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.card};
  overflow: hidden;
  position: relative;
`;

export const ForecastItem = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ForecastTextContainer = styled.View`
  align-items: flex-end;
`;

export const ForecastName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
`;

export const ForecastValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const SensorsContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0 0;
  padding-bottom: 60px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const BallContainer = styled.View`
  width: 100%;
  position: absolute;
`;

export const Ball = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: absolute;
  top: -20px;
  align-self: center;
  background: ${(props) => props.theme.colors.primary};
`;

export const Cloudy = styled(CloudySvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;

export const Wind = styled(WindSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;
