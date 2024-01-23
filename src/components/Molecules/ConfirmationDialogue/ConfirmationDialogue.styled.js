import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

export const StyledConfirmationDialogue = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  position: fixed;
  top: 0;
  background-color: ${color.white100};
  place-content: center;
  .dialogue-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: ${color.white};
    flex-direction: column;
    border-radius: 10px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 6px 27px 1px rgba(0, 0, 0, 0.75);
    .dialogue-btn-container {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      button {
      }
    }
  }
`;
