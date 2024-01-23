import styled from "styled-components";
import {fontWeight, fontSize} from "../../../utils/constant/style-const"
export const StyledErrorText = styled.span`
    display: block;
    font-size: ${(props) =>
      props.size === "large"
        ? `${fontSize.font64}`
        : props.size === "medium"
        ? `${fontSize.font32}`
        : `${fontSize.font20}`};
    line-height: ${(props) =>
      props.size === "large"
        ? `${fontSize.font64}`
        : props.size === "medium"
        ? `${fontSize.font42}`
        : `${fontSize.font30}`};
    color : ${(props) => props.color};
    font-family: Satoshi;
    font-weight: ${fontWeight.bold}
    letter-spacing: 0em;
    width:100%;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")}
  }
`;
