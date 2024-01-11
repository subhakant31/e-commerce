import { useContext, useEffect, useState } from "react";
import { headerData } from "../../../data/pageData";
import { InputField } from "../../Atoms/InputField/InputField";
import { StyledHeader } from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { SearchQueryContext } from "../../../contexts/productContext";
import { BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { UserCartContext } from "../../../contexts/userCartContext";
function Header() {
  const [isSticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
  const [userCart, setUserCart] = useContext(UserCartContext);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    const scrollVal = window.scrollY;
    if (scrollVal > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSubmit(e) {
    if (e.key === "Enter" || e.key === "Return") {
      e.preventDefault(); // Prevents the default form submission behavior
      setSearchQuery(e.target.value);
      navigate(`/products/?query=${e.target.value}`);
    }
  }

  return (
    <StyledHeader className={`${isSticky ? "sticky" : ""}`}>
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
        onKeyDown={handleSubmit}
      ></InputField>
      <div className='icon-button-container'>
        <Link to={"/usercart"} className='icon'>
          <BiCart />
          <div className='count-indicator'>{userCart.length}</div>
        </Link>
        <Link to={"/"} className='icon'>
          <VscAccount />
        </Link>
      </div>
    </StyledHeader>
  );
}

export default Header;
