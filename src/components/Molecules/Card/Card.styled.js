import styled from "styled-components";

export const StyledCard = styled.div`
max-width: 300px;
  .product {
    text-decoration: none;
    background-color: #f0f0f0;

    .image-container {
      max-width: 300px;
      border-radius: 20px;
      background: #F0EEED;
      margin-bottom: 14px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .title {
      display: block;
      font-family: Satoshi;
      font-size: 20px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0em;
      color: #000;
    }
    .brand {
      display: block;
      font-family: Satoshi;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      color: #000;
    }
    .price {
      display: block;
      font-family: Satoshi;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
      color: #000;
      margin-top: 10px;
    }
  }
`;
