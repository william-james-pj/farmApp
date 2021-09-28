import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import BarcodeSvg from "../../assets/svg/barcode-read.svg";

import { FlatList } from "react-native";
import { SensorItemType } from "../../@types/types";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const TitleContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.md};
  font-family: ${fonts.type.text700};
`;

export const FlatListS = styled(FlatList as new () => FlatList<SensorItemType>)`
  margin-top: 15px;
  width: 100%;
  flex: 1;
`;

export const Separator = styled.View`
  height: 5px;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 40px;
`;

export const EmptyContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyTitle = styled.Text`
  margin-top: 15px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const EmptySubTitle = styled.Text`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const Barcode = styled(BarcodeSvg).attrs((props) => ({
  fill: props.theme.colors.text,
  width: 100,
  height: 110,
}))`
  margin-top: 50px;
`;
