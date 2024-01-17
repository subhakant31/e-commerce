import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "satoshi";
  box-sizing: border-box;
  background-color: #ffff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  z-index: 999;
  @media screen and (max-width: 767px) {
    padding: 24px;
  }
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
      color: #000;
      svg {
        font-size: 24px;
      }
    }
    .icon-wrapper {
      position:relative;
      .count-indicator {
        position: absolute;
        top: -22px;
        right: -4px;
        border-radius: 50%;
        background-color: black;
        color: white;
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

  @media screen and (max-width: 1200px) {
  .navigation .nav-list{
    display:none;
  }
  .navigation.hamburger-nav .nav-list{
    display:flex;
    position: fixed;
    top: 0;
    background: aliceblue;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    gap: 24px;
    left: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 99;
  }
  li {
    padding-left:0;
  }
  }
  @media screen and (max-width: 1200px) {
   padding:24px 18px;
  .logo {
    margin-left: 2em;
    img {
      width: 64%;
    }
  }
  .icon-button-container a:last-child {
    display:none;
  }
}
  
`;
