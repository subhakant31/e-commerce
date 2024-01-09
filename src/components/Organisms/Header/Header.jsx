import { headerData } from "../../../data/pageData";
import { InputField } from "../../Atoms/InputField/InputField";
import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";
function Header() {
  return (
    <StyledHeader>
      <div className='logo'>
        <Link to={"/"}>
          <img src={headerData.logo.icon} alt={headerData.logo.alt} />
        </Link>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {headerData.navItems.map((item, key) => {
            return (
              <li key={key}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <InputField
        placeholder={"search for products..."}
        inputFieldType={"search"}
      ></InputField>
      <div className='icon-button-container'>
        {headerData.icons.map((item, key) => {
          return <div className='icon'>{item}</div>;
        })}
      </div>
    </StyledHeader>
  );
}

export default Header;
