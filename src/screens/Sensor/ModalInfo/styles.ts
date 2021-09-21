import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

import TempSvg from "../../../assets/svg/Temp.svg";
import WindSvg from "../../../assets/svg/Wind.svg";
import LightingSvg from "../../../assets/svg/Lighting.svg";
import HumiditySvg from "../../../assets/svg/Humidity.svg";
import SoilSvg from "../../../assets/svg/Soil.svg";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  width: 110%;
  height: 55%;
  background: ${(props) => props.theme.colors.card};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: -20px;

  padding: 30px;
`;

export const RowCenter = styled.View`
  width: 100%;
  align-items: center;
`;

export const Square = styled.View`
  width: 40px;
  height: 6px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.disabled};
`;

export const SensorName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin-top: 20px;
`;

export const Row = styled.View`
  margin-top: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ForecastItem = styled.View`
  width: 45%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 20px;
`;

export const ForecastTextContainer = styled.View`
  flex: 2;
  align-items: flex-end;
`;

export const ForecastName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const ForecastValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const Temp = styled(TempSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  flex: 1;
`;

export const Wind = styled(WindSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  flex: 1;
`;

export const Lighting = styled(LightingSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  flex: 1;
`;

export const Humidity = styled(HumiditySvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  flex: 1;
`;

export const Soil = styled(SoilSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))`
  flex: 1;
`;
