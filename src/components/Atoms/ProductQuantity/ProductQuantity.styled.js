import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

export const StyledProductQuantity = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 62px;
  background-color: ${color.gray94};
  gap: 20px;
  width: fit-content;
  svg {
    width: 20px;
    height: 20px;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;
