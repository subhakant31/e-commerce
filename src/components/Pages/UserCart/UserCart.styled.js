import styled from "styled-components";

export const StyledUserCart = styled.div`
.cart-wrapper--main {
    display: flex;
    width: fit-content;
    padding: 20px 24px;
    align-items: flex-start;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    flex-direction: column;
    row-gap: 16px;
    height:fit-content;
}
.cart-details {
    display: flex; 
    gap: 10rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    padding-bottom: 16px;
    margin-bottom: 16px
   
}
.cart-details:last-child {
    border-bottom:none;
    margin-bottom: 0; 
    padding-bottom: 0;
}
.sub-heading {
    margin-top:0;
}
.cart-wrapper {
    display: flex;
    gap: 24px;
    .details {
        display: flex;
        gap: 16px;
        flex-direction: column;
        justify-content: center;
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
}
.hkzDSY .heading {
    padding-bottom: 26px;
    padding-left: 100px;
    text-align:left;
}
.increment-button {
    display: flex;
    align-items: center;
    button  {
        display:none;
    }
 .gPpgCx {
    padding: 0 0 0 4px;
    background: none; 
    gap: 0; 
    
 }
}


`;