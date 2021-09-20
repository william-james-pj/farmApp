import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.View`
  background: ${(props) => props.theme.colors.card};

  width: 90%;
  min-height: 340px;
  border-radius: 10px;
  padding: 20px;

  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin-bottom: 10px;

  width: 100%;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  margin: 10px 0;
`;

export const RowColor = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 50px;
  overflow: hidden;

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.Pressable`
  margin-right: 16px;
  justify-content: center;
`;

export const TextCancel = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;
