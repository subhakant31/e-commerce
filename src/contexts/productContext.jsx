import React from "react";
import { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export function ProductDataContext(props) {
  const [productData, setProductData] = useState();

  return (
    <ProductContext.Provider value={[productData, setProductData]}>
      {props.children}
    </ProductContext.Provider>
  );
}
