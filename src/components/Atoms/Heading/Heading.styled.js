import styled from "styled-components";

export const StyledHeading = styled.div`
  .heading {
    font-size: ${(props) => (props.primary ? "64px" : "48px")};
    line-height: ${(props) => (props.primary ? "64px" : "58px")};
  }
`;
