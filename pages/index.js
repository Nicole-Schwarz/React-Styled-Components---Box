import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { StyledBox } from "../components/BoxWithStyledComponents/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox $isBlack="green" />
      <StyledBox $isBlack="black" />
    </div>
  );
}
