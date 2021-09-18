import styled from "styled-components/native";

type WrapperProps = {
  layout: "column" | "row";
};

export const Wrapper = styled.View<WrapperProps>`
  align-items: center;
  flex-direction: ${(props) => props.layout};
`;
