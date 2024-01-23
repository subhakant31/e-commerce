import styled from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";
export const StyledControlPanel = styled.div`
  max-width: 295px;
  .heading {
    display: flex;
    justify-content: space-between;
    margin: 20px 24px;
    font-family: Satoshi;
    font-size: ${fontSize.font20};
    font-weight: ${fontWeight.bold};
    line-height: 27px;
    letter-spacing: 0em;
    border-bottom: 1px solid ${color.black200};
    padding-bottom: 24px;
    text-align: left;
    align-items: center;
}
    h3 {
      margin-right: 166px;
    }
  }

  .filter-heading {
    display: flex;
    justify-content: space-between;
    font-family: Satoshi;
    font-size: ${fontSize.font20};
    font-weight: ${fontWeight.bold};
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }

  .filter-contents {
    padding: 20px 24px 0 24px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    label {
      display: flex;
      gap: 6px;
      align-items: center;
      font-size: ${fontSize.font18};
    }
  }

  .color-list {
    display: flex;
    flex-direction:column;
    gap: 8px;
  }
`;
