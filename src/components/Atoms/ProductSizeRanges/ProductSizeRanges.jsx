import { useState } from "react";
import { StyledProductSizeRanges } from "./ProductSizeRanges.styled";

function ProductSizeRanges({ sizes, selectedSize, setSelectedSize, setErrorTextVisible }) {
  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setErrorTextVisible(false);
    setSelectedSize(newSize);
  };

  return (
    <StyledProductSizeRanges>
      <label htmlFor='shoeSize'>Choose Size:</label>
      <select value={selectedSize} onChange={handleSizeChange}>
        <option value='' >
          Select a size
        </option>
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </StyledProductSizeRanges>
  );
}

export default ProductSizeRanges;
