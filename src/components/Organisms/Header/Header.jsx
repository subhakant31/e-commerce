import { headerData } from "../../../data/pageData";
import { InputField } from "../../Atoms/InputField/InputField";
import { StyledHeader } from "./Header.styled";
function Header() {
  return (
    <StyledHeader>
      <div className='logo'>
        <img src={headerData.logo.icon} alt={headerData.logo.alt} />
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {headerData.navItems.map((item, key) => {
            return (
              <li key={key}>
                <a href={item.href}>{item.title}</a>
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
          return <div className="icon">{item}</div>;
        })}
      </div>
    </StyledHeader>
  );
}

export default Header;
