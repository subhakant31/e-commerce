import styled from "styled-components";

export const StyledCard = styled.div`
  height: 100%;
  .product {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;

    .image-container {
      display: grid;
      place-content: center;
      border-radius: 20px;
      background: #f0eeed;
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
      flex-grow: 1;
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
