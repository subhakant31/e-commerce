import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./Heading.styled";
export const Heading = ({ text, size, centeredText, ...props }) => {
  return (
    <StyledHeading size={size} centeredText={centeredText}>
      {size === "large" ? (
        <h1 className='heading'>{text}</h1>
      ) : size === "medium" ? (
        <h2 className='heading'>{text}</h2>
      ) : (
        <h3 className='heading'>{text}</h3>
      )}
    </StyledHeading>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  centeredText: PropTypes.bool.isRequired,
};
