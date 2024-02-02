import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";

function findSize(size) {
  switch (size) {
    case "small":
      return 68;
    case "medium":
      return 80;
    case "large":
      return 90;
    default:
      return 68; // Default size if 'size' is not small, medium, or large
  }
}

export const StyledButton = styled.div`
  button {
    ${(props) =>
      props.type === "primary" &&
      `background-color: ${color.black};
      color : ${color.white};
      border: 1px solid ${color.black};
      border-radius : 62px;
      cursor: pointer;
      padding: 15px 67px;
      font-size : ${fontSize.font16};
      
      `}
    ${(props) =>
      props.type === "secondary" &&
      `background-color: ${color.transparent};
        color : ${color.black};
        border: 1px solid ${color.black};
        border-radius : 62px;
        cursor: pointer;
        padding: 15px 67px;
        font-size : ${fontSize.font16};
        
        `}
        ${(props) =>
      props.type === "remove-coupon" &&
      `background-color: ${color.transparent};
            color : ${color.red};
            border:none;
            border-bottom: 1px solid ${color.red};
            cursor: pointer;
            font-size : ${fontSize.font16};
            
            `}
        ${(props) =>
      props.type === "pagination" &&
      ` 
        font-size: ${fontSize.font24};
        background-color: ${color.transparent};
        color:${color.black};
        display: grid;
        place-content:center;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        height: 36px;
        width: 36px;
        
      `}
  }
`;
