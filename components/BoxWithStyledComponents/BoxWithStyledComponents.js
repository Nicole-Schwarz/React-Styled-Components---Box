import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(prop) =>
    prop.$backgroundcolor === "green" ? "green" : "black"};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
