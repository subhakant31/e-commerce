import styled from "styled-components";

export const StyledErrorText = styled.span`
    display: block;
    font-size: ${(props) =>
      props.size === "large"
        ? "64px"
        : props.size === "medium"
        ? "40px"
        : "20px"};
    line-height: ${(props) =>
      props.size === "large"
        ? "64px"
        : props.size === "medium"
        ? "50px"
        : "30px"};
    color : ${(props) => props.color};
    font-family: Satoshi;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")}
  }
`;
