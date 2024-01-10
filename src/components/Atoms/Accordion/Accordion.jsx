import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion'>
      <div className='filter-heading' onClick={toggleAccordion}>
        <h3>{title}</h3>
        <MdOutlineKeyboardArrowDown />
      </div>
      {isOpen && <div className='filter-contents'>{children}</div>}
    </div>
  );
}

export default Accordion;
