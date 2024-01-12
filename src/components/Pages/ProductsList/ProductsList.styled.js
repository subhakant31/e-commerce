import styled from "styled-components";

export const StyledProductsList = styled.div`
  .item-list {
    display: grid;
    place-items: center;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  .product-list-filter-container {
    display: grid;
    grid-template-columns: 20% 70%;
  }
  .sorting-btn-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
