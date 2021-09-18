import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 85%;
  height: 60px;

  border-radius: 10px;
  overflow: hidden;

  margin: 40px 0 20px;
`;

export const Button = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.md};
  font-family: ${fonts.type.text700};
`;
