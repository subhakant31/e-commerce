import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";

export const StyledPagination = styled.nav`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    li {
      margin-left: 10px;
    }
    .active {
      background-color: ${color.lightGray};
      border-radius: 10px;
    }
  }
`;
