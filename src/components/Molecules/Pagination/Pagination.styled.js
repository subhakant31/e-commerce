import styled from "styled-components";

export const StyledPagination = styled.nav`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    li {
      margin-left: 10px;
      button {
        font-size: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        border: none;
        padding: 0;
        height: 36px;
        width: 36px;
      }
    }
    .active {
      background-color: lightgray;
    }
  }
`;
