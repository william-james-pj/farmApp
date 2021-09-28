import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

type WrapperProps = {
  disabled: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  background: ${(props) => props.theme.colors.primary};
  width: 80px;
  height: 45px;

  border-radius: 10px;
  overflow: hidden;

  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

export const Button = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;
