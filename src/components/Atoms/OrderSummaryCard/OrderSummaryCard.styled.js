import styled from "styled-components";

export const StyledOrderSummary = styled.div`
    padding: 20px 24px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 500px;
    width: 100%;
.order-button-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .checkout-button {
    display: flex;
    justify-content: center;
    align-items: center;
    }
}
.order-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

}
.order-details {
    display: flex;
    flex-direction: column;
    gap: 24px;

    p {
        display: flex;
        justify-content: space-between;
    }
}
.order-details p:last-child {
    border-top: 2px solid rgba(0, 0, 0, 0.10);
    padding: 20px 0;
}
@media screen and (max-width: 1200px) { 
    width: fit-content;
    max-width: none;
    margin: 0 24px;
    .order-button {
        flex-direction:column;
    }
}

`;