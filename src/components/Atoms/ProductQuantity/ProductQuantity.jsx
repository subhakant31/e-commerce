import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { StyledProductQuantity } from './ProductQuantity.styled';

const ProductQuantity = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 5 ){
      setCount(count + 1);
    }

  };

  const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
      }
  };

  return (
    <StyledProductQuantity>
      <FiMinus onClick={decrement} />
      {count}
      <GoPlus onClick={increment} />
    </StyledProductQuantity>
  );
};

export default ProductQuantity;
