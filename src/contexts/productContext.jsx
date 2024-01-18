import React from "react";
import { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export function ProductDataContext(props) {
    
  const [productData, setProductData] = useState(
    JSON.parse(localStorage.getItem("productData")) || []
  );
  useEffect(() => {
    // Save productData to local storage whenever it changes
    localStorage.setItem("productData", JSON.stringify(productData));
  }, [productData]);

  return (
    <ProductContext.Provider value={[productData, setProductData]}>
      {props.children}
    </ProductContext.Provider>
  );
}
