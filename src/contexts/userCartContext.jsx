import React from "react";
import { useState, useEffect } from "react";

export const UserCartContext = React.createContext();

export function UserCartPageContext(props) {

  const [userCart, setUserCart] = useState(
    JSON.parse(localStorage.getItem("userCart")) || []
  );

    //local storage implementation for userCart
  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }, [userCart]);


  return (
    <UserCartContext.Provider value={[userCart, setUserCart]}>
      {props.children}
    </UserCartContext.Provider>
  );
}
