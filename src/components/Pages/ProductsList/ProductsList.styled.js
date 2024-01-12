import styled from "styled-components";

export const StyledProductsList = styled.div`
  .item-list {
    display: grid;
    place-items: center;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2em;
  }
  .product-list-filter-container {
    display: grid;
    grid-template-columns: 20% 70%;
  }
  .sorting-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3em;
  }
  .sorting-buttons {
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 16px;
  }
`;
