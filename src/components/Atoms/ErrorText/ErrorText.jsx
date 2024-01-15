import React from "react";
import PropTypes from "prop-types";
import { StyledErrorText } from "./ErrorText.styled";
export const ErrorText = ({
  className,
  text,
  size,
  color,
  centeredText,
  ...props
}) => {
  return (
    <StyledErrorText
      size={size}
      color={color}
      className={className}
      centeredText={centeredText}
    >
      {text}
    </StyledErrorText>
  );
};

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  centeredText: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
