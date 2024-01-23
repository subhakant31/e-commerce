import styled from "styled-components";
import { fontWeight,fontSize } from "../../../utils/constant/style-const";

export const StyledTextParagraph = styled.div`
  .sub-heading {
    margin-top: 32px;
    font-family: Satoshi;
    font-size: ${(props) => (props.subText ? `${fontSize.font16}` : `${fontSize.font14}`)};
    line-height: ${(props) => (props.subText ? `${fontSize.font22}` : "normal")};
    font-weight: ${fontWeight.regular};
    letter-spacing: 0em;
    text-align: left;
    text-wrap: wrap;
  }
`;
