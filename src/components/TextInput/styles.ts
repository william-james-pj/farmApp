import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

const Valid = true;
const Invalid = false;
const Pristine = null;
type BoxProps = {
  color: typeof Valid | typeof Invalid | typeof Pristine;
  width: string;
};

export const Wrapper = styled.View`
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Box = styled.View<BoxProps>`
  width: ${(props) => props.width};
  height: 58px;

  justify-content: center;
  padding: 0 15px;

  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.color === Valid
        ? props.theme.colors.primary
        : props.color === Invalid
        ? props.theme.colors.red
        : props.theme.colors.disabled};
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.disabled,
}))`
  color: ${(props) => props.theme.colors.text};
  font-family: ${fonts.type.text400};
`;

export const ErrorText = styled.Text`
  width: 75%;
  color: ${(props) => props.theme.colors.red};
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.xs};
`;
