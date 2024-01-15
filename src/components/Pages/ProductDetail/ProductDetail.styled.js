import styled from "styled-components";

export const StyledProductsDetail = styled.div`
.product-view-wrapper {
    justify-content: center;
    align-items: center;
    gap: 48px;
    display: grid;
    grid-template-columns: 40% 40%;
    margin: 4% 0;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 90%;
    }
}
.button-wrapper {
    display: flex;
    gap: 20px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    align-items: center;
    }
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
    .error-message {
        color: red;
        font-style: italic;
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
table {
    width: 100%;
}
th {
    background-color: #fff;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 14px;
}
tbody  {
    tr {
        background-color: #dddddd;
    }
    td {
        border: 2px solid #fff;
        padding: 8px 32px 8px 8px;
    }
}


`;