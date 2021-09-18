import styled from "styled-components/native";

type WrapperProps = {
  opacity: boolean;
};

type RadioProps = {
  width: number;
  height: number;
  borderRadius: number;
  borderWidth: number;
  selected: boolean;
};

type BallProps = {
  width: number;
  height: number;
  borderRadius: number;
};

export const Wrapper = styled.Pressable<WrapperProps>`
  align-items: center;
  margin: 5px 10px;
  flex-direction: row;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export const Radio = styled.View<RadioProps>`
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};
  border-width: ${(props) => `${props.borderWidth}px`};
  border-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.disabled};
`;

export const Ball = styled.View<BallProps>`
  background-color: ${(props) => props.theme.colors.primary};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: ${(props) => `${props.borderRadius}px`};
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colors.text};
  margin-left: 10px;
`;
