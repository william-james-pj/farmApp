import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.lg};
  font-family: ${fonts.type.text700};
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
`;

export const Form = styled.View`
  width: 100%;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const Row = styled.View`
  width: 85%;
  flex-direction: column;
`;

export const Footer = styled.View`
  width: 85%;
  align-items: flex-end;
  margin-top: 30px;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin: 10px 0;
`;
