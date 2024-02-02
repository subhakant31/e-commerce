import styled from "styled-components";
import { color, device } from "../../../utils/constant/style-const";
export const  StyledDetailCard = styled.div`
.cart-wrapper--main {
    display: flex;
    width: fit-content;
    padding: 20px 24px;
    align-items: flex-start;
    border-radius: 20px;
    border: 1px solid ${color.black100};
    flex-direction: column;
    row-gap: 16px;
    height: fit-content;
  }
  .cart-details {
    border-bottom: 1px solid ${color.black100};
    padding-bottom: 16px;
    margin-bottom: 16px;
    width: 100%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 72% 23%;
    @media screen and (${device.tablet}) {
      grid-template-columns: 100%;
    }
  }


`;