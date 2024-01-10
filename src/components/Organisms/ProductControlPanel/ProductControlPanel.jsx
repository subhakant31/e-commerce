// ProductControlPanel.js
import React, { useContext, useState } from "react";
import { StyledControlPanel } from "./ProductControlPanel.styled";
import { CiFilter } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import Accordion from "../../Atoms/Accordion/Accordion";
import RangeSlider from "../../Atoms/RangeSlider/RangeSlider";
import { ProductContext } from "../../../contexts/productContext";
import {
  findAllAvailableBrands,
  findAllAvailableColors,
} from "../../../helperFunctions";

function ProductControlPanel(props) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [productData, setProductData] = useContext(ProductContext);

  const availableColors = findAllAvailableColors(productData.sneakers);
  const availableBrands = findAllAvailableBrands(productData.sneakers);

  return (
    <StyledControlPanel>
      <div className='heading'>
        <h3>filters</h3>
        <CiFilter />
      </div>
      <Accordion title='brands'>
        {availableBrands.map((item, key) => (
          <label key={key}>
            <input type='checkbox' value={`${item}`} />
            {item}
          </label>
        ))}
      </Accordion>
      <Accordion title='colors'>
        <ul className='color-list'>
          {availableColors.map((item, key) => (
            <li key={key}>
              <label>
                <input type='checkbox' value={`${item}`} />
                <ColorIcon color={item}></ColorIcon>
                {item}
              </label>
            </li>
          ))}
        </ul>
      </Accordion>
      {/* <Accordion title='price'>
        <RangeSlider
          min={0}
          max={100}
          value={priceRange}
          onChange={(newRange) => setPriceRange(newRange)}
        />
      </Accordion> */}
    </StyledControlPanel>
  );
}

export default ProductControlPanel;
