import styled from "styled-components";
import { color, device } from "../../../utils/constant/style-const";

export const StyledOrderSummary = styled.div`
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid ${color.black100};
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
  width: 100%;
  height: fit-content;
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
  .remove-coupon-btn {
    border: none;
    border-bottom: 1px solid ${color.red100};
    cursor: pointer;
    background-color: ${color.transparent};
    color: ${color.red100};
  }
  .order-details p:last-child {
    border-top: 2px solid ${color.black100};
    padding: 20px 0;
  }
  @media screen and (${device.laptop}) {
    width: fit-content;
    max-width: none;
    margin: 0 24px;
    .order-button {
      flex-direction: column;
    }
  }
`;
