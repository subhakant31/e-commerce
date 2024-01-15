import styled from "styled-components";

export const StyledTextParagraph = styled.div`
  .sub-heading {
    margin-top: 32px;
    font-family: Satoshi;
    font-size: ${(props) => (props.subText ? "16px" : "14px")};
    line-height: ${(props) => (props.subText ? "22px" : "normal")};
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    text-wrap: wrap;
  }
`;
