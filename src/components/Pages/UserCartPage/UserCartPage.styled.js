import styled from "styled-components";
import {
  color,
  device,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

export const StyledUserCart = styled.div`
  .cart-wrapper--main {
    display: flex;
    width: fit-content;
    padding: 20px 24px;
    align-items: flex-start;
    border-radius: 20px;
    border: 1px solid ${color.black100};
    flex-direction: column;
    row-gap: 16px;
    height: fit-content;
  }
  .cart-details {
    border-bottom: 1px solid ${color.black100};
    padding-bottom: 16px;
    margin-bottom: 16px;
    width: 100%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 72% 23%;
    @media screen and (${device.tablet}) {
      grid-template-columns: 100%;
    }
  }
  .price-quantity-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image-wrapper {
    height: 100%;
    background-color: #f0eeed;
    border-radius: 20px;
    display: grid;
    place-content: center;
    padding: 0 20px;
  }
  .product-price {
    font-family: Satoshi;
    font-size: ${fontSize.font24};
    font-weight: ${fontWeight.bold};
    line-height: 32px;
  }
  .cart-details:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .sub-heading {
    margin-top: 0;
  }
  .cart-wrapper {
    display: flex;
    text-decoration: none;
    gap: 24px;
    height: fit-content;
    @media screen and (${device.laptop}) {
      display: block;
    }
    .details {
      display: flex;
      gap: 16px;
      flex-direction: column;
      justify-content: center;
      color: ${color.black};
      font-weight: ${fontWeight.medium};
      a {
        color: ${color.black};
      }
      .increment-button {
        display: flex;
        align-items: center;
        gap: 6px;
        .product-quantity-btn-wrapper {
          padding: 0.5em 0.25em;
          margin-top: 0;
          button {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .product-color {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  img {
    width: 125px;
    height: 187px;
    flex-shrink: 0;
    @media screen and (${device.laptop}) {
      width: fit-content;
    }
  }
  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    height: auto;
    @media screen and (${device.tablet}) {
      flex-direction: row-reverse;
    }
  }
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .order-summary-card {
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 35%;
    gap: 50px;
    margin-top: 20px;
    @media screen and (${device.laptop}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .product-quantity-btn-wrapper {
    margin-top: 10px;
  }

  .page-error-dialogue {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }
  @media screen and (${device.laptop}) {
    .cart-wrapper--main {
      margin: 0 24px;
    }
    .cart-details {
      gap: 0;
    }
    .page-error-dialogue span {
      font-size: ${fontSize.font20};
      line-height: 28px;
    }
  }
`;
