import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";

export const StyledPagination = styled.nav`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    li {
      margin-left: 10px;
      button {
        font-size: ${fontSize.font24};
        background-color: ${color.transparent};
        border: none;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        padding: 0;
        height: 36px;
        width: 36px;
      }
    }
    .active {
      background-color: ${color.lightGray};
    }
  }
`;
