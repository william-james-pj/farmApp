import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 30px 20px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
  margin: 20px 0 10px;
`;
