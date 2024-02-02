import { StyledProductSizeRanges } from "./ProductSizeRanges.styled";

function ProductSizeRanges({
  sizes,
  selectedSize,
  setSelectedSize,
  setErrorTextVisible,
}) {
  const handleSizeChange = (newSize) => {
    setErrorTextVisible(false);
    setSelectedSize(newSize);
  };

  return (
    <StyledProductSizeRanges>
      <ul className='size-range-list'>
        {sizes.map((size, index) => (
          <li
            key={index}
            className={size === selectedSize ? "active" : ""}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </StyledProductSizeRanges>
  );
}

export default ProductSizeRanges;
