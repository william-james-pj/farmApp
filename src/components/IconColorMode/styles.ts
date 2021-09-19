import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

export const ModeButtonView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModeIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.text};
`;
