import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { StyledProductQuantity } from "./ProductQuantity.styled";

const ProductQuantity = ({ quantity, setQuantity }) => {
  const increment = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <StyledProductQuantity>
      <button disabled={quantity===1}><FiMinus onClick={decrement}/></button>
      {quantity}
      <button disabled={quantity===5}><GoPlus onClick={increment} /></button>
    </StyledProductQuantity>
  );
};

export default ProductQuantity;
