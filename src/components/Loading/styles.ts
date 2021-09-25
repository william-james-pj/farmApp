import styled from "styled-components/native";

import { ActivityIndicator } from "react-native";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary,
}))``;
