import styled from "styled-components";

export const StyledHeading = styled.div`
  .heading {
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
    font-family: Satoshi;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")};
  }
  @media screen and (max-width: 1200px) {
    .heading {
      font-size: ${(props) =>
        props.size === "large"
          ? "36px"
          : props.size === "medium"
          ? "24px"
          : "20px"};
      line-height: ${(props) =>
        props.size === "large"
          ? "34px"
          : props.size === "medium"
          ? "28px"
          : "30px"};

      } 
  }
`;
