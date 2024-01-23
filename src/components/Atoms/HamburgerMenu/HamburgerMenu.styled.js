import styled from "styled-components";
import { device, fontSize } from "../../../utils/constant/style-const";

export const  StyledHamburgerMenu = styled.div `
display:none;
.hamburger-icon {
    font-size: ${fontSize.font24};
    cursor:pointer;
}

@media screen and (${device.laptop}) {
    display: flex;
    position: absolute;
    z-index: 999;
    left: 14px;
    justify-content: center;
    align-items: center;
 
  }


`;