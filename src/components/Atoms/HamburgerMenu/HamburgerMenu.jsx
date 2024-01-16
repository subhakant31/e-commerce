import React from 'react';
import {StyledHamburgerMenu} from './HamburgerMenu.styled'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <StyledHamburgerMenu className={`hamburger-menu ${isOpen ? 'hamburger-open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
      {isOpen ? <RxCross2 />:<GiHamburgerMenu />}
      </div>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
