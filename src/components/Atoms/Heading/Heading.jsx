import React from "react";
import PropTypes from "prop-types";
import { StyledHeading } from "./Heading.styled";
export const Heading = ({ text, primary, centeredText, ...props }) => {
  return (
    <StyledHeading primary={primary} centeredText={centeredText}>    
    {(primary === 'large') ? (
        <h1 className='heading'>{text}</h1>
      ) : (primary === 'medium') ? (<h2 className='heading'>{text}</h2>
      ) : (<h3 className='heading'>{text}</h3>)}
    </StyledHeading>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.oneOf(["large", "medium", "small"]),
  centeredText: PropTypes.bool.isRequired,
};
