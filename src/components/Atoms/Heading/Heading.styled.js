import styled from "styled-components";
import { device, fontWeight, fontSize } from "../../../utils/constant/style-const";

export const StyledHeading = styled.div`
  .heading {
    font-size: ${(props) =>
      props.size === "large"
        ? `${fontSize.font64}`
        : props.size === "medium"
        ? `${fontSize.font40}`
        : `${fontSize.font20}`};
    line-height: ${(props) =>
      props.size === "large"
        ? `${fontSize.font64}`
        : props.size === "medium"
        ? `${fontSize.font50}`
        : `${fontSize.font30}`};
    font-family: Satoshi;
    font-weight: ${fontWeight.bold};
    letter-spacing: 0em;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")};
  }
  @media screen and (${device.laptop}) {
    .heading {
      font-size: ${(props) =>
        props.size === "large"
          ? `${fontSize.font36}`
          : props.size === "medium"
          ? `${fontSize.font24}`
          : `${fontSize.font20}`};
      line-height: ${(props) =>
        props.size === "large"
          ? `${fontSize.font34}`
          : props.size === "medium"
          ? `${fontSize.font28}`
          : `${fontSize.font30}`};

      } 
  }
`;
