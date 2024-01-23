import styled from "styled-components";

export const StyledColorIcon = styled.div`
  height: 16px;
  width: 30px;
  border-radius: 10px;
  cursor: pointer;
  border: 0.5px solid;
  background-color: ${(props) => {
    return props.color;
  }};
`;
