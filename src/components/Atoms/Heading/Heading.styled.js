import styled from "styled-components";

export const StyledHeading = styled.div`
  .heading {
    font-size: ${(props) => ((props.primary === 'large') ? "64px" : 
    (props.primary === 'medium') ? "40px" : "20px")};
    line-height: ${(props) => ((props.primary === 'large') ? "64px" :
    (props.primary === 'medium') ? "50px" : "30px")};
    font-family: Satoshi;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: ${(props) => (props.centeredText ? "center" : "unset")};
  }
`;
