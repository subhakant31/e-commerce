// InputField.styled.js
import styled from "styled-components";
import { color, device, fontSize } from "../../../utils/constant/style-const";

export const StyledInputField = styled.div`
  width: 577px;
  height: 30px;
  border-radius: 62px;
  background-color: ${color.gray94};
  display: flex;
  align-items: center;
  padding: 12px 16px;
  svg {
    font-size: ${fontSize.font20};
  }
  input {
    margin-left: 12px;
    border: none;
    width: 100%;
    background-color: ${color.transparent};
    padding: 12px;
    &:placeholder {
      font-family: "Satoshi";
    }
  }
  @media screen and (${device.tablet}) {
    width:fit-content;
    padding: 8px 10px;
  }
`;
