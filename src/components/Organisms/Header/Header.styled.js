import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  .navigation {
    .nav-list {
      display: flex;
      list-style: none;
      li {
        padding-left: 24px;
        a {
          color: #000;
          font-size: 16px;
          text-decoration: none;
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
  .icon-button-container {
    display: flex;
    .icon {
      margin-left: 14px;
      svg {
        font-size: 24px;
      }
    }
  }
`;
