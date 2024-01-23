import { css } from "styled-components";
import satoshiLight from "../assets/fonts/satoshi/Satoshi-Light.otf";
import satoshiRegular from "../assets/fonts/satoshi/Satoshi-Regular.otf";
import satoshiMedium from "../assets/fonts/satoshi/Satoshi-Medium.otf";
import satoshiBold from "../assets/fonts/satoshi/Satoshi-Bold.otf";
import { fontWeight } from "../utils/constant/style-const";

const fontFaces = css`
  @font-face {
    font-family: "Satoshi";
    src: url(${satoshiLight}) format("opentype");
    font-weight: ${fontWeight.light};
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src: url(${satoshiRegular}) format("opentype");
    font-weight: ${fontWeight.regular};
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src: url(${satoshiMedium}) format("opentype");
    font-weight: ${fontWeight.medium};
    font-style: normal;
  }

  @font-face {
    font-family: "Satoshi";
    src: url(${satoshiBold}) format("opentype");
    font-weight: ${fontWeight.bold};
    font-style: normal;
  }
`;

export default fontFaces;
