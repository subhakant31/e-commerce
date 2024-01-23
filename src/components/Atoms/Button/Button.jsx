import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  text,
  primary,
  size,
  onClick,
  className,
  title,
  ...props
}) => {
  return (
    <StyledButton primary={primary} className={className} onClick={onClick}>
      <button title={title}> {text}</button>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  size: "medium",
  onClick: undefined,
};
