import styled from "styled-components/native";

type WrapperProps = {
  colorSquare: string;
};

export const Wrapper = styled.Pressable<WrapperProps>`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: ${(props) => props.colorSquare};
  margin: 5px 5px;
  flex: 1 0 20%;

  align-items: center;
  justify-content: center;
`;
