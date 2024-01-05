import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ text, primary, size, ...props }) => {
  return (
    <StyledButton primary={primary}>
      <button> {text}</button>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onclick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: "medium",
  onChange: undefined,
};
