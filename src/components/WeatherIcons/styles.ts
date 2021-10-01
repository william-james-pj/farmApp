import styled from "styled-components/native";

import ClearDaySvg from "../../assets/svg/weather/clearDay.svg";
import ClearNightSvg from "../../assets/svg/weather/clearNight.svg";
import FewCloudsDaySvg from "../../assets/svg/weather/fewCloudsDay.svg";
import FewCloudsNightSvg from "../../assets/svg/weather/fewCloudsNight.svg";
import ScatteredCloudsDaySvg from "../../assets/svg/weather/scatteredCloudsDay.svg";
import ScatteredCloudsNightSvg from "../../assets/svg/weather/scatteredCloudsNight.svg";
import BrokenCloudsSvg from "../../assets/svg/weather/brokenCloudsDay.svg";
import ShowerRainSvg from "../../assets/svg/weather/showerRainDay.svg";
import RainDaySvg from "../../assets/svg/weather/rainDay.svg";
import RainNightSvg from "../../assets/svg/weather/rainNight.svg";
import ThunderstormDaySvg from "../../assets/svg/weather/thunderstormDay.svg";
import ThunderstormNightSvg from "../../assets/svg/weather/thunderstormNight.svg";
import SnowSvg from "../../assets/svg/weather/snow.svg";

export const ClearDay = styled(ClearDaySvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 28,
  height: 32,
}))``;

export const ClearNight = styled(ClearNightSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 28,
  height: 32,
}))``;

export const FewCloudsDay = styled(FewCloudsDaySvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const FewCloudsNight = styled(FewCloudsNightSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const ScatteredCloudsDay = styled(ScatteredCloudsDaySvg).attrs(
  (props) => ({
    fill: props.theme.colors.text,
    width: 32,
    height: 32,
  })
)``;

export const ScatteredCloudsNight = styled(ScatteredCloudsNightSvg).attrs(
  (props) => ({
    fill: props.theme.colors.text,
    width: 32,
    height: 32,
  })
)``;

export const BrokenClouds = styled(BrokenCloudsSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const ShowerRain = styled(ShowerRainSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 28,
  height: 32,
}))``;

export const RainDay = styled(RainDaySvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const RainNight = styled(RainNightSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const ThunderstormDay = styled(ThunderstormDaySvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 32,
  height: 32,
}))``;

export const ThunderstormNight = styled(ThunderstormNightSvg).attrs(
  (props) => ({
    fill: props.theme.colors.text,
    width: 32,
    height: 32,
  })
)``;

export const Snow = styled(SnowSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 25,
  height: 32,
}))``;
