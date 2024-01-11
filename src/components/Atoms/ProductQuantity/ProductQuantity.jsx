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
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <StyledProductQuantity>
      <FiMinus onClick={decrement} />
      {quantity}
      <GoPlus onClick={increment} />
    </StyledProductQuantity>
  );
};

export default ProductQuantity;
