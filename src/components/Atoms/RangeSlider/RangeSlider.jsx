import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { color } from "../../../utils/constant/style-const";

export default function RangeSlider({
  filtersApplied,
  setFiltersApplied,
  currentPage,
  setCurrentPage,
  ...props
}) {
  const valueLabelFormat = (value) => {
    return `$${value}`;
  };
  const [value, setValue] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setCurrentPage(1);
    setValue(newValue);
    setFiltersApplied({ ...filtersApplied, selectedPriceRange: newValue }); // Fix here
  };

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Slider
        sx = {{color:`${color.black}`}}
        aria-label='Always visible'
        defaultValue={80}
        value={value}
        min={0}
        max={500}
        onChange={handleChange}
        step={5}
        valueLabelDisplay='on'
        valueLabelFormat={valueLabelFormat}
      />
    </Box>
  );
}
