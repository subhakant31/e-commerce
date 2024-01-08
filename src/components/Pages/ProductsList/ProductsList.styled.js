import styled from "styled-components";

export const StyledProductsList = styled.div`
  margin-top: 200px;
  .item-list {
    display: grid;
    place-items: center;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
