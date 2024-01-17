import styled from "styled-components";

export const StyledHeroBanner = styled.div`
    position:relative;
    .banner-contents-wrapper {
        max-width:577px;
        position:absolute;
        top:12%;
        padding-left:100px;
    }

  .hero-image-container {
    height: 100vh;
    width: 100vw;
    img {
        height: 100%;
        width: 100%;
        z:index:998;
        object-fit: cover;
        top: 0;
    }
  }

  

  .stats-list {
    display : flex;
    list-style:none;
    padding-left:0;
    margin-top:48px;
    li {
        display:flex;
        flex-direction:column;
        margin-right: 64px;
        &:last-child {
            margin-right:0;
        }
        .stat-value {
            font-family: Satoshi;
            font-size: 40px;
            font-weight: 700;
            line-height: 54px;
            letter-spacing: 0em;

        }
        .stat-title {
            font-family: Satoshi;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;

        }
    }
  }

  .shop-now-btn {
    margin-top: 32px;
  }
  @media screen and (max-width: 1200px) {
    .hero-image-container {
      height: fit-content;
      background-color: #F2F0F1;
    }
    .banner-contents-wrapper {
      padding: 24px 24px 0 24px;
      position: relative;
      top: 0;
      max-width: none;
    }
  .hero-image {
    height: fit-content;
  }
  }
@media screen and (max-width: 767px) {
  .banner-contents-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .stats-list {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 24px;

      li {
        margin-right: 0;
      }
    }
  }
}
`;
