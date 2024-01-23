import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

export const StyledProductSizeRanges = styled.div`
  max-width: 500px;
  select {
    margin-left: 14px;
    border-radius: 12px;
    padding: 8px;
  }

  .size-range-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .active {
      background-color: ${color.black};
      color: ${color.white};
    }
    li {
      padding: 12px 24px;
      background-color: ${color.black500};
      color: ${color.black};
      width: fit-content;
      border-radius: 62px;
      cursor: pointer;
    }
  }
`;
