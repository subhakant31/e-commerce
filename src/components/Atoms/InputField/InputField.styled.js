// InputField.styled.js
import styled from "styled-components";

export const StyledInputField = styled.div`
  width: 577px;
  height: 30px;
  border-radius: 62px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  svg {
    font-size: 20px;
  }
  input {
    margin-left: 12px;
    border: none;
    width: 100%;
    background-color: transparent;
    padding: 12px;
    &:placeholder {
      font-family: "Satoshi";
    }
  }
`;
