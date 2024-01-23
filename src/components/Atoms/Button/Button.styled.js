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
  // margin-top: 32px;
  button {
    background-color: ${(props) => (props.primary ? `${color.black}` : `${color.transparent}`)};
    color: ${(props) => (props.primary ? `${color.white}` : `${color.black}`)};
    border: 1px solid ${color.black};
    border-radius: 62px;
    cursor:pointer;
    padding: 15px ${(props) => findSize(props.size)}px;
    font-size: ${fontSize.font16};
  }
`;
