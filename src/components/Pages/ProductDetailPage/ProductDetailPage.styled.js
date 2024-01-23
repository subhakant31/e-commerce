import styled from "styled-components";
import { color, device, fontSize, fontWeight } from "../../../utils/constant/style-const";

export const StyledProductsDetail = styled.div`
.product-view-wrapper {
    justify-content: center;
    align-items: center;
    gap: 48px;
    display: grid;
    grid-template-columns: 40% 40%;
    margin: 4% 0;
    @media screen and (${device.laptop}) {
        grid-template-columns: 90%;
    }
}
.button-wrapper {
    display: flex;
    gap: 20px;
    @media screen and (${device.tablet}) {
        flex-direction: column;
    align-items: center;
    }
}
.product-left-container {
   background-color:${color.black500};
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
font-size: ${fontSize.font32};
font-weight: ${fontWeight.bold};
}
table {
    width: 100%;
}
th {
    background-color: ${color.white}
    font-size: ${fontSize.font24};
    font-weight: ${fontWeight.bold};
    padding-bottom: 14px;
}
tbody  {
    tr {
        background-color: ${color.gray700};
    }
    td {
        border: 2px solid ${color.white};
        padding: 8px 32px 8px 8px;
    }
}


`;