import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./Heading.styled";
export const Heading = ({ text, primary, centeredText, ...props }) => {
  return (
    <StyledHeading primary={primary} centeredText={centeredText}>
      {primary ? (
        <h1 className='heading'>{text}</h1>
      ) : (
        <h2 className='heading'>{text}</h2>
      )}
    </StyledHeading>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  centeredText: PropTypes.bool.isRequired,
};
