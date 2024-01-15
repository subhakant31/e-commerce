import styled from "styled-components";

export const StyledUserCart = styled.div`
  .cart-wrapper--main {
    display: flex;
    width: fit-content;
    padding: 20px 24px;
    align-items: flex-start;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    flex-direction: column;
    row-gap: 16px;
    height: fit-content;
  }
  .cart-details {
    display: flex;
    gap: 10rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 16px;
    margin-bottom: 16px
    
   
}
.cart-details:last-child {
    border-bottom:none;
    margin-bottom: 0; 
    padding-bottom: 0;
  }
  .sub-heading {
    margin-top: 0;
  }
  .cart-wrapper {
    display: flex;
    gap: 24px;
    @media screen and (max-width: 1200px) {
    display:block;

    }
    .details {
      display: flex;
      gap: 16px;
      flex-direction: column;
      justify-content: center;
        color:#000;
        font-weight: 500;
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
    @media screen and (max-width: 1200px) {
        width:fit-content;
    
        }
    
  }
  .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    height: 10.8em;
  }
  svg {
    width: 24px;
    height: 24px;
  }
  .order-summary-card {
    display: grid;
    justify-content: center;
    grid-template-columns: 50% 35%;
    gap: 50px;
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.increment-button {
    display: flex;
    align-items: center;
    button {
      display: none;
    }
 div {
    padding: 0 0 0 4px;
    background: none; 
    gap: 0; 
    
 }
}
h2.heading {
    padding-bottom: 26px;
    padding-left: 100px;
    text-align:left;
}

@media screen and (max-width: 1200px) {
    .cart-wrapper--main {
        margin: 0 24px;
    }
    .cart-details {
    gap:0;
    }
       }

`;