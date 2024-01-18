import styled from "styled-components";

export const StyledErrorText = styled.span`
    display: block;
    font-size: ${(props) =>
      props.size === "large"
        ? "64px"
        : props.size === "medium"
        ? "32px"
        : "20px"};
    line-height: ${(props) =>
      props.size === "large"
        ? "64px"
        : props.size === "medium"
        ? "42px"
        : "30px"};
    color : ${(props) => props.color};
    font-family: Satoshi;
    font-weight: 700;
    letter-spacing: 0em;
    width:100%;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")}
  }
`;
