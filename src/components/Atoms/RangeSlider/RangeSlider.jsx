// TwoPointSlider.js
import React from "react";

function RangeSlider({ min, max, onChange, value }) {
  const [minValue, maxValue] = value;

  const handleMinChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    onChange([newValue, maxValue]);
  };

  const handleMaxChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    onChange([minValue, newValue]);
  };

  return (
    <div className='two-point-slider'>
      <label>{minValue}</label>
      <input
        type='range'
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
      />
      <label>{maxValue}</label>
      <input
        type='range'
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
      />
    </div>
  );
}

export default RangeSlider;
