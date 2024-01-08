import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 2.8em 0;
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
        gap: 16px;
        svg {
            height:28px;
            width:28px;
        }
    }
  }
  .right-container {
    display:flex;
    flex-basis:70%;
    justify-content: space-around;
    ul li {
        padding-bottom: 1em; 
    }
  }
  .footer-bottom {
    padding-top: 0.5em;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: space-between;
    .payment-cards {
        display: flex;
    }
  }
`;