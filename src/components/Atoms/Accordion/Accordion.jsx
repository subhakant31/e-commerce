import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion'>
      <div
        className='filter-heading'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h3>{title}</h3>
        <MdOutlineKeyboardArrowDown />
      </div>
      {isOpen && <div className='filter-contents'>{children}</div>}
    </div>
  );
}

export default Accordion;
