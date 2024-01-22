import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(prop) =>
    prop.$isBlack === "black" ? "black" : "green"};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

/* export default function Box({$isBlack}){
  return <StyledBox $isBlack={$isBlack} />;
}*/
