import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { FlatList } from "react-native";
import { WeatherItemType, WeatherSliderItemType } from "../../@types/types";

import WindSvg from "../../assets/svg/Wind.svg";
import HumiditySvg from "../../assets/svg/Humidity.svg";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CloudyContainer = styled.View`
  background: ${(props) => props.theme.colors.primary};
  padding: 6px;
  border-radius: 20px;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.card};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const TempHeader = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxl};
  font-family: ${fonts.type.text700};
`;

export const Row = styled.View`
  width: 200px;
  flex-direction: row;
`;

export const Grup = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GrupValue = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  margin-left: 10px;
`;

export const TextPrimary = styled.Text`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin: 20px 0 10px;
`;

export const SlideContainer = styled.View`
  flex: 1;
`;

export const FlatListS = styled(
  FlatList as new () => FlatList<WeatherItemType>
)`
  width: 100%;
  flex: 3;
`;

export const FlatListSlide = styled(
  FlatList as new () => FlatList<WeatherSliderItemType>
)`
  width: 100%;
  flex: 1;
`;

export const Separator = styled.View`
  height: 5px;
`;

export const SeparatorHorizontal = styled.View`
  width: 20px;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 20px;
`;

export const FooterViewHorizontal = styled.View`
  background: transparent;
  height: 100%;
  width: 40px;
`;

export const Wind = styled(WindSvg).attrs((props) => ({
  fill: props.theme.colors.disabled,
  width: 22,
}))``;

export const Humidity = styled(HumiditySvg).attrs((props) => ({
  fill: props.theme.colors.disabled,
  width: 16,
}))``;
