import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  text,
  type,
  size,
  onClick,
  className,
  title,
  ...props
}) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      <button title={title}> {text}</button>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["remove-coupon", "primary", "secondary", "pagination"])
    .isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: undefined,
};
