import PropTypes from "prop-types";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { StyledInputField } from "./InputField.styled";
import { RiCoupon2Line } from "react-icons/ri";
export const InputField = ({
  placeHolder,
  inputFieldType,
  icon,
  onKeyDown,
  className,
  onChange,
  value,
  ...props
}) => {
  return (
    <StyledInputField inputFieldType={inputFieldType} className={className}>
      {inputFieldType === "search" ? <FaMagnifyingGlass /> : <RiCoupon2Line />}
      <input
        type='text'
        value={value}
        className={`storybook-input-field ${inputFieldType}-input-field`}
        placeholder={placeHolder}
        onKeyDown={onKeyDown}
        onChange={onChange}
        {...props}
      />
    </StyledInputField>
  );
};

InputField.propTypes = {
  placeHolder: PropTypes.string,
  inputFieldType: PropTypes.oneOf(["search", "coupon"]).isRequired,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  placeHolder: "placeholder",
  onChange: undefined,
};
