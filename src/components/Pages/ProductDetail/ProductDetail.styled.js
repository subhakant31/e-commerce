import styled from "styled-components";

export const StyledProductsDetail = styled.div`
.product-view-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
}
.button-wrapper {
    display: flex;
    gap: 20px;
}
.product-left-container {
   background-color:#F0EEED;
   border-radius: 20px;
}
.product-right-container {
    display:flex;
    flex-direction: column;
    row-gap: 20px;
    .sub-heading {
        margin-top:0;
    }
}
img {
width: 100%;
height: 530px;
}
.product-color {
    display:flex;
    align-items: center;
    gap:12px;
}
p {
font-size: 32px;
font-weight: 700;
}
`;