import HeroBanner from "../../Organisms/HeroBanner/HeroBanner";
import { StyledHomePage } from "./HomePage.styled";
function HomePage(props) {
  return (
    <StyledHomePage>
      <HeroBanner></HeroBanner>
    </StyledHomePage>
  );
}

export default HomePage;
