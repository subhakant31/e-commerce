import styled from "styled-components";
import { color, fontSize, fontWeight } from "../../../utils/constant/style-const";

export const StyledCard = styled.div`
  height: 100%;
  .product {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    .image-container {
      display: grid;
      place-content: center;
      border-radius: 20px;
      background: ${color.black500};
      margin-bottom: 14px;
      max-height: 298px;
      max-width: 295px;

      img {
        width: 100%;
        object-fit: cover;
        transition: all 0.3s;
        &:hover {
          scale: 1.05;
        }
      }
    }
    .title {
      display: block;
      font-family: Satoshi;
      font-size: ${fontSize.font20};
      font-weight: ${fontWeight.bold};
      line-height: 27px;
      letter-spacing: 0em;
      color: ${color.black};
      flex-grow: 1;
    }
    .brand {
      display: block;
      font-family: Satoshi;
      font-size: ${fontSize.font16};
      font-weight: ${fontWeight.regular};
      line-height: 27px;
      letter-spacing: 0em;
      color: ${color.black};
    }
    .price {
      display: block;
      font-family: Satoshi;
      font-size: ${fontSize.font24};
      font-weight: ${fontWeight.bold};
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      color: ${color.black};
      margin-top: 10px;
    }
  }
`;
