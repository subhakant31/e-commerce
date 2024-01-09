import { useState } from "react";
import { StyledProductSizeRanges } from "./ProductSizeRanges.styled";

function ProductSizeRanges({ sizes}) {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
    };

    return (
        <StyledProductSizeRanges >
            <label htmlFor="shoeSize">Choose Size:</label>
            <select value={selectedSize} onChange={handleSizeChange}>
                <option value="" disabled>Select a size</option>
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