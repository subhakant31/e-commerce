import styled from "styled-components";

export const StyledProductsList = styled.div`
  height: 100%;
  .item-list {
    display: grid;
    place-items: center;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 2em;
  }
  .product-list-filter-container {
    display: flex;
    flex-wrap: wrap;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3em;
    .filter-btn {
      display: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      background-color: transparent;
    }
  }
  .product-control-panel-container {
    max-width: 295px;
  }
  .sorting-buttons {
    padding: 10px 16px;
    border: none;
    font-size: 16px;
  }
  .items-pagination-container {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    .item-list {
      grid-template-columns: repeat(1, 1fr);
    }
    .product-list-filter-container {
      justify-content: center;
    }
    .btn-wrapper {
      justify-content: space-between;
      .filter-btn {
        display: block;
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    .item-list {
      grid-template-columns: 50% 50%;
    }
  }
`;
