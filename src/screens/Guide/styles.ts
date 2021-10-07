import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { GuideBoxType } from "../../@types/types";
import { FlatList } from "react-native";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};

  text-align: justify;
  line-height: 22px;
  margin: 10px 0 15px;
`;

export const FlatListS = styled(FlatList as new () => FlatList<GuideBoxType>)`
  width: 100%;
  flex: 1;
`;

export const Separator = styled.View`
  height: 30px;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 10px;
`;
