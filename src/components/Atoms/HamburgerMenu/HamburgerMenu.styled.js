import styled from "styled-components";

export const  StyledHamburgerMenu = styled.div `
display:none;
.hamburger-icon {
    font-size: 32px;
    cursor:pointer;
}

@media screen and (max-width: 1200px) {
    display: flex;
    position: absolute;
    z-index: 999;
    left: 14px;
    justify-content: center;
    align-items: center;
 
  }


`;