import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

export const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background-color: ${color.white};
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
  }
  .loader::before,
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${color.black};
    animation: prixClipFix 2s linear infinite;
  }
  .loader::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: ${color.red};
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;
