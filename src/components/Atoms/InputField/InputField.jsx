import PropTypes from "prop-types";
import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { StyledInputField } from "./InputField.styled";
import { CiMail } from "react-icons/ci";
export const InputField = ({
  placeholder,
  inputFieldType,
  icon,
  onKeyDown,
  ...props
}) => {
  return (
    <StyledInputField inputFieldType={inputFieldType}>
      {inputFieldType === "search" ? <FaMagnifyingGlass /> : <CiMail />}
      <input
        type='text'
        className={`storybook-input-field ${inputFieldType}-input-field`}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        {...props}
      />
    </StyledInputField>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  inputFieldType: PropTypes.oneOf(["search", "email"]).isRequired,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  placeholder: "placeholder",
  icon: null,
  onChange: undefined,
};
