import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { StyledAccordion } from "./Accordion.styled";
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledAccordion title={isOpen ? "collapse" : "expand"}>
      <div
        className='filter-heading'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h3>{title}</h3>
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
      {isOpen && <div className='filter-contents'>{children}</div>}
    </StyledAccordion>
  );
}

export default Accordion;
