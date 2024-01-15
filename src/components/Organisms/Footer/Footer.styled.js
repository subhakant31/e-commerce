import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 2.8em 0;
  margin-top: 3em;
  .footer-wrapper,
  .footer-bottom {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
  }
  .footer-wrapper {
    display: flex;
  }
  .left-container {
    flex-basis: 30%;
    .social-icons {
        display: flex;
        gap: 28px;
        padding-top: 18px;
        svg {
            height:28px;
            width:28px;
            color: #000;
        }
    }
  }
  .right-container {
    display:flex;
    flex-basis:70%;
    justify-content: space-around;
    padding-bottom: 22px;
    ul li {
        padding-bottom: 1em; 
        a {
          color:rgba(0, 0, 0, 0.60);
        }
    }
    h4 {
      margin-bottom: 26px;
    }
  }
  .footer-bottom {
    padding-top: 1.5em;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: space-between;
    .payment-cards {
        display: flex;
    }
  }
  @media screen and (max-width: 1200px) {
    .footer-wrapper {
      flex-direction:column;
      padding: 0 24px;
    }
    .right-container {
      display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    padding-top: 24px;
    }
    .footer-bottom {
      flex-direction: column;
    align-items: center;
    gap: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    .sub-heading  {
      text-wrap:balance;
    }
  }
`;