import styled from "styled-components";
import { color, device, fontSize } from "../../../utils/constant/style-const";

export const StyledHeader = styled.header`
  font-family: "satoshi";
  box-sizing: border-box;
  background-color: ${color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  z-index: 999;
  @media screen and (${device.tablet}) {
    padding: 24px;
  }
  .navigation {
    .nav-list {
      display: flex;
      list-style: none;
      li {
        padding-left: 24px;
        a {
          color: ${color.black};
          font-size: ${fontSize.font16};
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
      color: ${color.black};
      svg {
        font-size: ${fontSize.font24};
      }
    }
    .icon-wrapper {
      position: relative;
      .count-indicator {
        position: absolute;
        top: -22px;
        right: -4px;
        border-radius: 50%;
        background-color: ${color.black};
        color: ${color.white};
        display: grid;
        place-content: center;
        height: 20px;
        width: 20px;
      }
    }
  }
  &.sticky {
    position: sticky;
    top: 0;
  }
  .search-btn {
    display: none;
    font-size: ${fontSize.font24}
    border: none;
  }
  .active {
    font-weight: 700;
  }

  @media screen and (${device.laptop}) {
    .navigation .nav-list {
      display: none;
      li {
        padding-left: 0;
      }
    }
    .search-field-container {
      position: relative;
      bottom: -50px;
      width: 100%;
    }
    .search-btn {
      display: block;
    }
    .navigation.hamburger-nav .nav-list {
      display: flex;
      position: fixed;
      top: 0;
      background: ${color.gray94};
      width: 104vw;
      height: 104vh;
      flex-direction: column;
      gap: 24px;
      left: 0;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 99;
    }
    li {
      padding-left: 0;
    }
  }
  @media screen and (${device.laptop}) {
    padding: 24px 18px;
    .logo {
      margin-left: 2em;
      img {
        width: 64%;
      }
    }
  }
`;
