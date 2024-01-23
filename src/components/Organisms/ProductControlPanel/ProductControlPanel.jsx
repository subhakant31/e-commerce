import React from "react";
import { StyledControlPanel } from "./ProductControlPanel.styled";
import { CiFilter } from "react-icons/ci";
import RangeSlider from "../../Atoms/RangeSlider/RangeSlider";
import ColorIcon from "../../Atoms/ColorIcon/ColorIcon";
import Accordion from "../../Atoms/Accordion/Accordion";
import {
  findAllAvailableBrands,
  findAllAvailableColors,
} from "../../../helperFunctions";
import data from "../../../data/productsData";

function ProductControlPanel({
  filtersApplied,
  setFiltersApplied,
  currentPage,
  setCurrentPage,
  ...props
}) {
  // Extract available brands and colors from the data
  const availableBrands = findAllAvailableBrands(data.sneakers);
  const availableColors = findAllAvailableColors(data.sneakers);

  // Handle brand filter change
  const handleFilterChange = (event, filterType) => {
    const value = event.target.value;
    setCurrentPage(1);

    if (filterType === "brands") {
      const selectedFilters = filtersApplied.selectedBrands;
      const updatedFilters = selectedFilters.includes(value)
        ? selectedFilters.filter((selectedFilter) => selectedFilter !== value)
        : [...selectedFilters, value];

      setFiltersApplied({
        ...filtersApplied,
        selectedBrands: updatedFilters,
      });
    } else if (filterType === "colors") {
      const selectedFilters = filtersApplied.selectedColors;
      const updatedFilters = selectedFilters.includes(value)
        ? selectedFilters.filter((selectedFilter) => selectedFilter !== value)
        : [...selectedFilters, value];

      setFiltersApplied({
        ...filtersApplied,
        selectedColors: updatedFilters,
      });
    }
  };

  return (
    <StyledControlPanel>
      <div className='heading'>
        <h3>Filters</h3>
        <CiFilter />
      </div>

      <Accordion title='Brands'>
        {availableBrands.map((brand, key) => (
          <label key={key}>
            <input
              type='checkbox'
              value={brand}
              checked={filtersApplied.selectedBrands.includes(brand)}
              onChange={(event) => handleFilterChange(event, "brands")}
            />
            {brand}
          </label>
        ))}
      </Accordion>

      <Accordion title='Colors'>
        <ul className='color-list'>
          {availableColors.map((color, key) => (
            <li key={key}>
              <label>
                <input
                  type='checkbox'
                  value={color}
                  checked={filtersApplied.selectedColors.includes(color)}
                  onChange={(event) => handleFilterChange(event, "colors")}
                />
                <ColorIcon color={color} />
                {color}
              </label>
            </li>
          ))}
        </ul>
      </Accordion>

      <Accordion title={"Price"}>
        <RangeSlider
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filtersApplied={filtersApplied}
          setFiltersApplied={setFiltersApplied}
        />
      </Accordion>
    </StyledControlPanel>
  );
}

export default ProductControlPanel;
