import styled from "styled-components";
import { color, device, fontSize } from "../../../utils/constant/style-const";

export const StyledProductsList = styled.div`
  height: 100%;
  .item-list {
    display: grid;
    place-items: center;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 2em;
    margin-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid ${color.black200};
  }
  .product-list-filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-left: 100px;
    @media screen and (${device.tablet}) {
      margin-left: 0;
    }
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .filter-btn {
      display: none;
      border: none;
      font-size: ${fontSize.font24};
      cursor: pointer;
      background-color: ${color.transparent};
    }
  }
  .product-control-panel-container {
    height: fit-content;
    max-width: 295px;
    border: 1px solid ${color.black200};
    border-radius: 20px;
  }
  .product-list-info-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .sorting-buttons {
    padding: 10px 16px;
    border: none;
    font-size: ${fontSize.font16};
  }
  .items-pagination-container {
    width: 70%;
    @media screen and (${device.tablet}) {
      margin-top: 50px;
    }
  }
  @media screen and (${device.tablet}) {
  .pagination-info {
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }
  @media screen and (${device.tablet}) {
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
  @media only screen and (${device.tabletMin}) and (${device.laptopL}) {
    .item-list {
      grid-template-columns: 50% 50%;
    }
  }
  @media screen and (${device.mobileL}) {
    nav .pagination li {
      margin-left: 0.25em;
    }
  }
`;
